import Link from "next/link";

export default function CTA({ href, label }) {
    return <div className="col-md my-1">
        <Link prefetch={true} href={href}>
            <a className="btn btn-primary shadow py-2 btn-block text-uppercase">{label}</a>
        </Link>
    </div>
}