import dynamic from "next/dynamic";

const Map = dynamic(() => import("./map"), {
	ssr: false
});

export default function CustomMap(props) {
    return <Map {...props} />
}