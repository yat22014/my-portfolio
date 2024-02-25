import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Card,CardBody, CardFooter } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function Experiences() {
    const MockItem = ({ children, name, main }: { children: React.ReactElement; name?: string; main?: boolean }) => {
        return (
            // <Card css={{ h: "$40", $$cardColor: main ? "#E4F0FF" : "#FFEECB" }}>
            //     <CardBody css={{ alignItems: "center" }}>{children}</CardBody>
            //     <CardFooter css={{ textAlign: "center", justifyContent: "center", fontWeight: "Bolder" }}>{name}</CardFooter>
            // </Card>
            <Card className={`w-full h-full ${main ? "bg-[#E4F0FF]" : "bg-[#FFEECB]"}`}>
                <CardBody className="items-center h-full justify-center py-6">{children}</CardBody>
                <CardFooter className="justify-center font-bold">{name}</CardFooter>
            </Card>
        );
    };

    return (
        <main className='p-24'>
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 justify-items-start my-6">
                <div className="w-full">
                    <MockItem name={"Javascript"} main>
                        <img className="lang-icon" src="images/languages/javascript.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"Angular"}>
                        <img className="lang-icon" src="images/languages/angularjs.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"React"}>
                        <img className="lang-icon" src="images/languages/react.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"nextJs"}>
                        <img className="lang-icon" src="images/languages/nextjs.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"jQuery"}>
                        <img className="lang-icon" src="images/languages/jquery.svg" />
                    </MockItem>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 justify-items-start my-6">
                <div className="w-full">
                    <MockItem name={"nodeJs"} main>
                        <img className="lang-icon" src="images/languages/nodejs.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"nextJs"}>
                        <img className="lang-icon" src="images/languages/nestjs.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"expressJs"}>
                        <img className="lang-icon" src="images/languages/expressjs.svg" />
                    </MockItem>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 justify-items-start my-6">
                <div className="w-full">
                    <MockItem name="PHP" main>
                        <img className="lang-icon" src="images/languages/php.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"Symfony"}>
                        <img className="lang-icon" src="images/languages/symfony.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"CodeIgniter"}>
                        <img className="lang-icon" src="images/languages/codeigniter.svg" />
                    </MockItem>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 justify-items-start my-6">
                <div className="w-full">
                    <MockItem name={"Database"} main>
                        <img className="lang-icon" src="images/languages/database.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"mySql"}>
                        <img className="lang-icon" src="images/languages/mysql.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"MongoDB"}>
                        <img className="lang-icon" src="images/languages/mongo.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"DynamoDB"}>
                        <img className="lang-icon" src="images/languages/dynamodb.svg" />
                    </MockItem>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 justify-items-start my-6">
                <div className="w-full">
                    <MockItem name={"CSS"} main>
                        <img className="lang-icon" src="images/languages/css3.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"Bootstrap"}>
                        <img className="lang-icon" src="images/languages/bootstrap.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"SCSS"}>
                        <img className="w-[60px]" src="images/languages/scss.svg" />
                    </MockItem>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 justify-items-start my-6">
                <div className="w-full">
                    <MockItem name={"Git"} main>
                        <img className="lang-icon" src="images/languages/git.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"BitBucket"}>
                        <img className="lang-icon" src="images/languages/bitbucket.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"Github"}>
                        <img className="lang-icon" src="images/languages/github.svg" />
                    </MockItem>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 justify-items-start my-6">
                <div className="w-full">
                    <MockItem main>
                        <div className="w-full text-center font-bold">Others</div>
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"HTML"}>
                        <img className="w-[60px]" src="images/languages/html5.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"Typescript"}>
                        <img className="lang-icon" src="images/languages/typescript.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"Ionic"}>
                        <img className="lang-icon" src="images/languages/ionic.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"GraphQL"}>
                        <img className="lang-icon" src="images/languages/graphql.svg" />
                    </MockItem>
                </div>
                <div className="w-full">
                    <MockItem name={"Ruby on rails"}>
                        <img className="lang-icon" src="images/languages/ruby-on-rails.svg" />
                    </MockItem>
                </div>
            </div>
        </main>
    );
}
