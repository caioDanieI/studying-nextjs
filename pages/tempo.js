import Link from 'next/link';

function Tempo(props) {
    console.log('>passando pelo frontend;')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (dinamico)</div>
            <div>{props.staticDateString} (estatico)</div>
            <div>
            <Link href="/">
            <a>voltar</a>
            </Link>
            </div>

        </div>
    )
}

export function getStaticProps() {
    console.log('>passando pelo getstaticprops();')
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }
}

export default Tempo;