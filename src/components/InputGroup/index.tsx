// @ts-nocheck
import React, { useContext } from "react";
import { InputLine } from "@/components/InputLine";
import { FormContext } from "@/components/Form";

export const InputGroup = () => {
	const { formState } = useContext(FormContext);

	return formState.map((item, index) => {
		return <InputLine key={item.code + index} {...item} />;
	});
};
