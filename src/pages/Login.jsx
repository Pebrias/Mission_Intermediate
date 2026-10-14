import AuthForm from '../components/AuthForm/AuthForm'

const fields = [
  { name: 'username', label: 'Username', type: 'text', placeholder: 'Masukkan username' },
  { name: 'password', label: 'Kata Sandi', type: 'password', placeholder: 'Masukkan kata sandi' },
]

const footerLinks = [
  { prefix: 'Belum punya akun?', text: 'Daftar', to: '/register' },
  { prefix: '', text: 'Lupa kata sandi?', to: '#' },
]

function Login() {
  return (
    <AuthForm
      title="Masuk"
      subtitle="Selamat datang kembali!"
      fields={fields}
      submitLabel="Masuk"
      googleLabel="Masuk dengan Google"
      footerLinks={footerLinks}
    />
  )
}

export default Login
