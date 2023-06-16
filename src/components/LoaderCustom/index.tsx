import { memo } from "react";
import s from "./styles.module.scss";

type TIsLoading = {
	isLoading: boolean;
};

export const LoaderCustom = memo(({ isLoading }: TIsLoading) => {
	const loader: string = isLoading ? "Loading..." : "";
	return <div className={s.loader}>{loader}</div>;
});
