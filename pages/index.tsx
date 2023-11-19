import Button from "@material-tailwind/react/components/Button"
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setNavbar } from '@/store/features/NavbarSlice';
export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div
      className={`dashboard flex min-h-screen flex-col  justify-center items-center p-24`}
    >
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl xl:text-7xl md:text-5xl text-center font-serif  text-white">Move freely between</h1>
        <h1 className="text-4xl xl:text-7xl md:text-5xl text-center font-serif  text-white">Chains and the world.</h1>
        <div className="flex flex-1 text-center justify-center max-w-[850px]">
          <p className="text-center text-xl text-white leading-loose">
            Bitcoin is the best money. It should defenitely be used like it. We always build and fund free, open-source projects aimed at making bitcoin the planet’s preferred currency.
          </p>
        </div>
        <div className="flex gap-5  items-center">
          <Button variant="gradient" color="pink" className="w-[300px] h-[50px]  rounded-full"
            onClick={() => {
              dispatch(setNavbar('Bridge'))
              router.push('/bridge')
            }}>
            Bridge
          </Button>
          <Button variant="gradient" color="white" className="w-[300px] h-[50px]  rounded-full"
            onClick={() => {
              dispatch(setNavbar('About Us'))
              router.push('/aboutus')
            }}>
            About Us
          </Button>
        </div>
      </div>
    </div>
  )
}
