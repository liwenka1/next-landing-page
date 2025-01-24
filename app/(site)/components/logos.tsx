import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

const Logos = () => {
  const logos = [
    {
      name: "Vercel",
      path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg"
    },
    {
      name: "Prime",
      path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg"
    },
    {
      name: "Trustpilot",
      path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg"
    },
    {
      name: "Webflow",
      path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg"
    },
    {
      name: "Airbnb",
      path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg"
    },
    {
      name: "Tina",
      path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg"
    },
    {
      name: "Stackoverflow",
      path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg"
    },
    {
      name: "mistral",
      path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg"
    }
  ]

  return (
    <section id="logos">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <h3 className="text-center text-sm font-semibold text-gray-500">TRUSTED BY LEADING TEAMS</h3>
        <Marquee reverse pauseOnHover className="mt-6 [--duration:20s]">
          {logos.map(({ name, path }) => (
            <Image
              key={name}
              src={path}
              alt={name}
              width={112}
              height={40}
              loading="lazy"
              className="h-10 w-28 opacity-30 grayscale dark:brightness-0 dark:invert"
            />
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default Logos
