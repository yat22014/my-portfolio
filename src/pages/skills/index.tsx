import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Grid, Card, Text } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function Experiences() {
    const MockItem = ({ children, name, main }: { children: React.ReactElement; name?: string; main?: boolean }) => {
        return (
            <Card css={{ h: "$40", $$cardColor: main ? "#fda8a8" : "#e5d91f" }}>
                <Card.Body css={{ alignItems: "center" }}>{children}</Card.Body>
                <Card.Footer css={{ textAlign: "center", justifyContent: "center", fontWeight: "Bolder" }}>{name}</Card.Footer>
            </Card>
        );
    };

    return (
        <main className={`${styles.main} ${inter.className}`}>
            <Grid.Container gap={2} justify="flex-start">
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"Javascript"} main>
                        <img className="lang-icon" src="images/languages/javascript.svg" />
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"Angular"}>
                        <img className="lang-icon" src="images/languages/angularjs.svg" />
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"React"}>
                        <img className="lang-icon" src="images/languages/react.svg" />
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"nextJs"}>
                        <img className="lang-icon" src="images/languages/nextjs.svg" />
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"jQuery"}>
                        <img className="lang-icon" src="images/languages/jquery.svg" />
                    </MockItem>
                </Grid>
            </Grid.Container>

            <Grid.Container gap={2} justify="flex-start">
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"nodeJs"} main>
                        <img className="lang-icon" src="images/languages/nodejs.svg" />
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"nextJs"}>
                        <img className="lang-icon" src="images/languages/nestjs.svg" />
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"expressJs"}>
                        <img className="lang-icon" src="images/languages/expressjs.svg" />
                    </MockItem>
                </Grid>
            </Grid.Container>

            <Grid.Container gap={2} justify="flex-start">
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name="PHP" main>
                        <img className="lang-icon" src="images/languages/php.svg" />
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"Symfony"}>
                        <img className="lang-icon" src="images/languages/symfony.svg" />
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"CodeIgniter"}>
                        <img className="lang-icon" src="images/languages/codeigniter.svg" />
                    </MockItem>
                </Grid>
            </Grid.Container>

            <Grid.Container gap={2} justify="flex-start">
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"Database"} main>
                        <img className="lang-icon" src="images/languages/database.svg" />
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"mySql"}>
                        <img className="lang-icon" src="images/languages/mysql.svg" />
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"MongoDB"}>
                        <img className="lang-icon" src="images/languages/mongo.svg" />
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"DynamoDB"}>
                        <img className="lang-icon" src="images/languages/dynamodb.svg" />
                    </MockItem>
                </Grid>
            </Grid.Container>

            <Grid.Container gap={2} justify="flex-start">
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"CSS"} main>
                        <img className="lang-icon" src="images/languages/css3.svg" />
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"Bootstrap"}>
                        <img className="lang-icon" src="images/languages/bootstrap.svg" />
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"SCSS"}>
                        <img className="lang-icon" src="images/languages/scss.svg" />
                    </MockItem>
                </Grid>
            </Grid.Container>

            <Grid.Container gap={2} justify="flex-start">
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"Git"} main>
                        <img className="lang-icon" src="images/languages/git.svg" />
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"BitBucket"}>
                        <img className="lang-icon" src="images/languages/bitbucket.svg" />
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"Github"}>
                        <img className="lang-icon" src="images/languages/github.svg" />
                    </MockItem>
                </Grid>
            </Grid.Container>

            <Grid.Container gap={2} justify="flex-start">
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem main>
                        <Text css={{ marginTop: "25%", fontWeight: "Bolder", overflow: "hidden" }}>Others</Text>
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"HTML"}>
                        <img className="lang-icon" src="images/languages/html5.svg" />
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"Typescript"}>
                        <img className="lang-icon" src="images/languages/typescript.svg" />
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"Ionic"}>
                        <img className="lang-icon" src="images/languages/ionic.svg" />
                    </MockItem>
                </Grid>
                <Grid lg={2} sm={6} xs={12}>
                    <MockItem name={"GraphQL"}>
                        <img className="lang-icon" src="images/languages/graphql.svg" />
                    </MockItem>
                </Grid>
            </Grid.Container>
        </main>
    );
}
