import AuthForm from '../components/AuthForm/AuthForm'

const fields = [
  { name: 'username', label: 'Username', type: 'text', placeholder: 'Masukkan username' },
  { name: 'password', label: 'Kata Sandi', type: 'password', placeholder: 'Masukkan kata sandi' },
  { name: 'confirmPassword', label: 'Konfirmasi Kata Sandi', type: 'password', placeholder: 'Masukkan kata sandi' },
]

const footerLinks = [{ prefix: 'Sudah punya akun?', text: 'Masuk', to: '/login' }]

function Register() {
  return (
    <AuthForm
      title="Daftar"
      subtitle="Selamat datang!"
      fields={fields}
      submitLabel="Daftar"
      googleLabel="Daftar dengan Google"
      footerLinks={footerLinks}
    />
  )
}

export default Register
