import type { User } from '../data'

export type AuthCredentials = {
  role: User['role']
  name: string
  identifier: string
  password: string
}

export interface AuthAdapter {
  authenticate(credentials: AuthCredentials): Promise<User>
}

export const demoAuthAdapter: AuthAdapter = {
  async authenticate(credentials) {
    const fallbackName = credentials.role === 'admin' ? 'Canteen manager' : 'Campus student'
    const fallbackId = credentials.role === 'admin' ? 'STAFF-01' : '22CS014'
    return {
      name: credentials.name.trim() || fallbackName,
      collegeId: credentials.identifier.trim() || fallbackId,
      role: credentials.role,
    }
  },
}
