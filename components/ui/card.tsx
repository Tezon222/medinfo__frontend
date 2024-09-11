import type { PolymorphicPropsWithRef } from "@zayne-labs/toolkit/type-helpers";
import { Slot } from "../common/Slot";

type CardProps = {
	className?: string;
	children?: React.ReactNode;
};

function Card<TElement extends React.ElementType = "article">(
	props: PolymorphicPropsWithRef<TElement, CardProps>
) {
	const { as: Element = "article", children, className = "" } = props;

	return <Element className={className}>{children}</Element>;
}

function CardHeader<TElement extends React.ElementType = "header">(
	props: PolymorphicPropsWithRef<TElement, CardProps>
) {
	const { as: Element = "header", children, className } = props;

	return <Element className={className}>{children}</Element>;
}

function CardContent<TElement extends React.ElementType = "div">(
	props: PolymorphicPropsWithRef<TElement, CardProps>
) {
	const { as: Element = "div", children, className = "" } = props;

	return <Element className={className}>{children}</Element>;
}

function CardFooter(props: CardProps & { asChild?: boolean }) {
	const { asChild, children, className = "" } = props;

	const Element = asChild ? Slot : "footer";

	return <Element className={className}>{children}</Element>;
}

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
