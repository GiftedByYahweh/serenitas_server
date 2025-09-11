export function authService(userService, common) {
  const { crypto, apiError } = common;

  const login = async ({ email, password }) => {
    if (!email || !password) apiError.BadRequest('Invalid data');
    const currentUser = await userService.findByEmail(email);
    if (!currentUser) apiError.BadRequest('Wrong email or password');
    const correctPassword = crypto.verify(currentUser.password, password);
    if (!correctPassword) apiError.BadRequest('Wrong email or password');
    const generatedSession = await crypto.generate(currentUser.id);
    return { userId: currentUser.id, session: generatedSession };
  };

  const registration = async (payload) => {
    const { email, username, password } = payload;
    if (!email || !username || !password) apiError.BadRequest('Invalid data');
    const registratedUser = await userService.findByEmail(email);
    if (registratedUser) apiError.Conflict(`User ${email} already exist`);
    const hashPassword = await crypto.hash(password);
    const regastratedUser = await userService.create({
      email,
      password: hashPassword,
      username,
    });
    return { userId: regastratedUser.id };
  };

  return { login, registration };
}
