import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import { Header } from '../../components/Header'

const signIn = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="-mt-36 flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <img className="w-80" src="/logo.png" />
        <p className="text-sm">
          This app was made with much<span className="mr-2 ml-1">❤️</span>and
          <span className="mr-2 ml-1">☕️</span> by Wannes.
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className={`mb-5 rounded-lg ${
                  provider.name === 'Google' ? 'bg-blue-500' : 'bg-black'
                }  px-4 py-3  text-white`}
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: '/' })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default signIn
