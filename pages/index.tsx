import useTranslation from "../lib/hooks/useTranslation"

export default function IndexPage(): JSX.Element {
    const { translate } = useTranslation()

    return (
        <div>
			{`${translate(`hello`)} ${translate(`world`)}`}
		</div>
    )
}