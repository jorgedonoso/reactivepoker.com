import Link from "next/link";

export default function CTA({ href, label }) {
    return <div className="col-md mb-2">
        <Link prefetch={true} href={href}>
            <a className="btn btn-danger shadow py-3 btn-block text-uppercase">{label}</a>
        </Link>
    </div>
}