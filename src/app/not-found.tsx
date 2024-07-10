import Link from 'next/link'
 

export default function NotFound() {
    return (
        <div className="box">
            <div className="has-text-black has-text-centered">
                <p className="content is-size-5">This isn't even like...a place. <span className="has-text-weight-semibold">WHAT DID YOU DO??!!!</span></p>
                <div className="is-max-width-500 m-auto">
                    <figure className="image is-16by9">
                        <iframe
                        title="what are you doing here GIF"
                            className="has-ratio"
                            width="500"
                            height="250"
                            src="https://giphy.com/embed/pJ8toT2rZvxwdHcZsY"
                            frameBorder="0"
                        ></iframe>
                    </figure>
                </div>
                <Link href="/">Return Home</Link>
            </div>
        </div>
    )
}