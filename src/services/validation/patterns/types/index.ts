export type Types = 'text' | 'name' | 'phone' | 'password' | 'email' | 'login'

export type Pattern = {
  pattern: RegExp
  tip: string
}

export type Patterns = {
  [key in Types]: Pattern
}
