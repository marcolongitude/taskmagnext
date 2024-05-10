import Image from "next/image";

export const ImageLogin = () => {
	return (
		<Image
			src={"/Project_69-06.png"}
			alt="Logo tecmar"
			width={500}
			height={300}
			priority
			layout="responsive"
		/>
	);
};
