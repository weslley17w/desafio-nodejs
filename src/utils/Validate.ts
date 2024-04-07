export default class Validate {
  static email(email: string): boolean {
    let validEmail = email.match(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    )

    return validEmail ? true : false
  }
}
