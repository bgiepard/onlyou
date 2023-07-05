import { Stack } from 'expo-router';
import {AuthProvider} from "../hooks/useAuth";
const Layout = () => {
  return <AuthProvider>
    <Stack />
  </AuthProvider>
}
export default Layout