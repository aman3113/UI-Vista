import React from "react";
import { Card, CardWithBadge, CardWithDismiss } from "../../components";
import CardWithTextOverlay from "../../components/Card/CardWithTextOverlay";
import CodeSnippet from "../assets/CodeSnippet";
// Import your card components

function CardPage() {
	const code1 = `
	<Card>
		<p>This is a simple card.</p>
	</Card>
	`;
	const code2 = `
	<CardWithBadge badge="New">
		<p>This card has a badge.</p>
	</CardWithBadge>
	`;
	const code3 = `
	<CardWithDismiss onDismiss={() => alert("Card dismissed")}>
		<p>This card can be dismissed.</p>
	</CardWithDismiss>
	`;
	const code4 = `
	<CardWithTextOverlay overlayText="Overlay Text">
		<p>This card has text overlay.</p>
	</CardWithTextOverlay>
	`;
	return (
		<div>
			<h2 className="text-3xl font-bold py-5">Cards</h2>

			<div className="my-4">
				<h3 className="text-2xl font-semibold py-2">Simple Card</h3>
				<p className="pb-3">A basic card component.</p>
				<Card width="250px">
					<p>This is a simple card.</p>
				</Card>
				<CodeSnippet code={code1} />
			</div>

			<div className="my-4">
				<h3 className="text-2xl font-semibold py-2">Card with Badge</h3>
				<p className="pb-3">A card with a badge.</p>
				<CardWithBadge badge="New" width="250px">
					<p>This card has a badge.</p>
				</CardWithBadge>
				<CodeSnippet code={code2} />
			</div>

			<div className="my-4">
				<h3 className="text-2xl font-semibold py-2">Card with Dismiss</h3>
				<p className="pb-3">A card with a dismiss button.</p>
				<CardWithDismiss
					onDismiss={() => alert("Card dismissed")}
					width="250px"
				>
					<p>This card can be dismissed.</p>
				</CardWithDismiss>
				<CodeSnippet code={code3} />
			</div>

			<div className="my-4">
				<h3 className="text-2xl font-semibold py-2">Card with Text Overlay</h3>
				<p className="pb-3">A card with text overlay.</p>
				<CardWithTextOverlay overlayText="Overlay Text" width="250px">
					<p>This card has text overlay.</p>
				</CardWithTextOverlay>
				<CodeSnippet code={code4} />
			</div>
		</div>
	);
}

export default CardPage;
