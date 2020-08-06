import Error from 'next/error'

export default function NotFoundPage(): JSX.Element {
    return <Error statusCode={404} />
}