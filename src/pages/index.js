import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Menu, Override, StackItem, Stack, Section } from "@quarkly/components";
import { MdHelp } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Menu />
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
			>
				We are cute
			</Text>
			<Text
				as="p"
				color="--grey"
				max-width="520px"
				margin="0 auto"
				text-align="center"
				font="--lead"
			>
				The smartest people work every day to provide the best service and to make our clients happy
			</Text>
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						CEO
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Nathan K. Joe
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1546672741-d327539d5f13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Developer
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						David R. Lema
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Marketing
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Janet E. Morey
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Designer
						<br />
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Claire R. Peery
						<br />
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
			>
				We are cute
			</Text>
			<Text
				as="p"
				color="--grey"
				max-width="520px"
				margin="0 auto"
				text-align="center"
				font="--lead"
			>
				The smartest people work every day to provide the best service and to make our clients happy
			</Text>
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						CEO
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Nathan K. Joe
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1546672741-d327539d5f13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Developer
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						David R. Lema
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Marketing
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Janet E. Morey
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Designer
						<br />
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Claire R. Peery
						<br />
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section color="--dark">
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				Q&A
			</Text>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					Is there life on Mars?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					How much salt is in the ocean?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
				</Text>
			</Box>
			<Box
				margin="36px 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					Why is the sky blue?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
				</Text>
			</Box>
		</Section>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						color="--dark"
						padding="98px 64px"
						background="--color-light"
						flex-direction="column"
					/>
					<Text
						as="h4"
						margin="12px 0"
						font="--base"
						color="--grey"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						About Zanzibar
					</Text>
					<Text as="h2" margin="12px 0" font="--headline2" md-font="--headline3">
						This is one of the world's greatest cultural crossroads where Africa meets the Indian Ocean.
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack>
						<StackItem width="100%" lg-width="33.3%" md-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1577315734214-4b3dec92d9ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1575999502951-4ab25b5ca889?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80) center/cover" />
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});