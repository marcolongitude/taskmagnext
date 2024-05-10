import Image from "next/image";

export const ImageLogin = () => {
	return (
		<Image
			src={"/loginImage.png"}
			alt="Logo tecmar"
			width={500}
			height={300}
			priority
			layout="responsive"
		/>
	);
};
