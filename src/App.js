import Alert from "./components/Alert/Alert";
import Avatar from "./components/Avatar/Avatar";
import AvatarBadge from "./components/Badge/AvatarBadge";
import FloatingActionButton from "./components/Button/FloatingActionButton";
import IconButton from "./components/Button/IconButton";
import LinkButton from "./components/Button/LinkButton";
import PrimaryButton from "./components/Button/PrimaryButton";
import Card from "./components/Card/Card";
import CardWithBadge from "./components/Card/CardWithBadge";
import CardWithDismiss from "./components/Card/CardWithDismiss";
import CardWithTextOverlay from "./components/Card/CardWithTextOverlay";
import Headings from "./components/Heading/Headings";
import ResponsiveImage from "./components/ResponsiveImage/ResponsiveImage";
import Text from "./components/Text/Text";

function App() {
	return (
		<div className="App">
			<p>App working</p>
			<Avatar name="Ujjwal" size="large" type="secondary">
				<AvatarBadge boxSize="15px" bg="red" />
			</Avatar>
			<Alert status="error" description="This is a custom error message" />
			<Alert status="success" heading="Custom Success!" />
			<Alert status="warning" />
			<Alert
				status="info"
				heading="Custom Info!"
				description="Custom info message here."
			/>
			<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
				<PrimaryButton label="Primary Button" variant="outline" size="sm" />

				<IconButton icon="🚀" text="Launch" variant="outline" size="sm" />
				<LinkButton
					label="Visit Google"
					href="https://www.google.com"
					variant="solid"
					size="sm"
				/>
				<FloatingActionButton icon="➕" variant="outline" size="xs" />
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					alignItems: "start",
				}}
			>
				<h2>Card with Badge</h2>
				<CardWithBadge badge="New">
					<h3>Title</h3>
					<p>Card content goes here.</p>
				</CardWithBadge>

				<h2>Card with Dismiss</h2>
				<CardWithDismiss>
					<h3>Title</h3>
					<p>Card content goes here.</p>
				</CardWithDismiss>

				<h2>Card with Text Overlay</h2>
				<CardWithTextOverlay overlayText="Overlay Text">
					<h3>Title</h3>
					<p>Card content goes here.</p>
				</CardWithTextOverlay>

				<h2>Text Only Card</h2>
				<Card text="This is a text-only card." />
			</div>
			<div style={{ padding: "10px" }}>
				<Headings size="5xl">Extra Large Heading</Headings>
				<Headings size="2xl" color="red">
					Large Heading
				</Headings>
				<Headings size="md" color="green" lines={1}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus labore
					earum unde modi voluptatum! Aspernatur modi assumenda laboriosam
					tempore quas qui praesentium voluptatibus id sunt reiciendis eligendi,
					aliquid vitae perspiciatis.
				</Headings>
			</div>
			<div>
				<Text size="md" color="blue">
					Medium Text
				</Text>
				<Text size="3xl" color="green" lines={2}>
					Large Text with Truncation
				</Text>
				<Text size="xl" color="red" as="bold">
					Bold Text
				</Text>
				<Text size="xl" color="purple" as="italic">
					Italic Text
				</Text>
				<Text size="sm" color="orange" as="underline">
					Underlined Text
				</Text>
				<Text size="md" color="gray" as="highlight">
					Highlighted Text
				</Text>
			</div>
			<div>
				<ResponsiveImage
					boxSize="200px"
					fallbackSrc="https://via.placeholder.com/200"
					alt="Sample Image"
					objectFit="cover"
					borderRadius="full"
				/>

				<ResponsiveImage
					boxSize="150px"
					fallbackSrc="https://via.placeholder.com/300"
					alt="Another Image"
					objectFit="contain"
					borderRadius="8px"
				/>
			</div>
		</div>
	);
}

export default App;
