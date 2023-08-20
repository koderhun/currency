// @ts-nocheck
import { useContext } from "react";
import FormatInput from "react-currency-input-field";
import { Flag } from "@/components/Flag";
import { FormContext } from "@/components/Form";
import s from "./styles.module.scss";

interface Props {
	code: string;
	value: string;
}

export const InputLine = ({ code, value }: Props) => {
	const { changeInput } = useContext(FormContext);
	return (
		<div className={s.line}>
			<div className={s.flag}>
				<Flag {...{ name: code }} />
			</div>
			<div className={s.content}>
				<FormatInput
					{...{
						className: s.input,
						name: code,
						placeholder: "0",
						value: value,
						decimalScale: 2,
						decimalsLimit: 2,
						fixedDecimalLength: 2,
						defaultValue: 0,
						decimalSeparator: ".",
						groupSeparator: " ",
						type: "tel",
						onValueChange: (value) => {
							changeInput(value, code);
						},
						autoComplete: "off",
					}}
				/>
			</div>
		</div>
	);
};
