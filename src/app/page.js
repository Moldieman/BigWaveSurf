import LoginLinks from '@/app/LoginLinks'

export const metadata = {
    title: 'Big Wave Surf',
}

const Home = () => {
    return (
        <>
            <div className="relative flex items-top justify-center min-h-screen bg-white  sm:items-center sm:pt-0">
                <LoginLinks />

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:pt-0">
                        <img src="/images/logo-bws.png" alt="Big Wave Surf" className="logo" />
                    </div>
                    <div className=' text-center'>Big Wave Surf</div>

                    

                    <div className="flex justify-center mt-4 sm:items-center sm:justify-between">
                        <div className="text-center text-sm text-gray-500">
                            <div className="flex items-center">
                                CSCA5028 Final Project by Alexander Molde
                            </div>
                            <div className="flex items-center mt-5">
                                Login with the follwoing credentials:
                                <br />
                                Email: csca5028@test.com
                                <br />
                                Password: 12345678
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
