import Link from "next/link"

type LinkCstmProps = {
    link: string
    name: string
}

export default function LinkCstm({ link, name }: LinkCstmProps) {
    return <Link
        className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none transition-all duration-400 ease-in-out"
        href={link}
    >
        {name}
    </Link>
}