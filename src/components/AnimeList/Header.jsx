import Link from "next/link"

const Header = ({ title, linkhref, linktitle }) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
      {linkhref && linktitle ?

        <Link href={linkhref} className="md:text-xl text-sm underline hover:text-color-accent transition-all text-color-primary">
          {linktitle}
        </Link>
        : null
      }
    </div>
  )
}
export default Header