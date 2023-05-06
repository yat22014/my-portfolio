import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Grid, Card, Text } from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })

export default function Experiences() {
    const MockItem = ({ children, name }: {children:  React.ReactElement, name?: string}) => {
        return (
          <Card css={{ h: "$24", $$cardColor: '$colors$primary' }}>
            <Card.Body css={{alignItems: 'center'}}>
                {children}
            </Card.Body>
            <Card.Footer css={{textAlign: 'center', justifyContent: 'center'}}>{name}</Card.Footer>
          </Card>
        );
      };

    return (
        <Grid.Container gap={2} justify="center">
          <Grid xs={2}>
            <MockItem name={'Javascript'}><img className="icon" src="images/languages/javascript.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
            Frontend
          </Grid>
          <Grid xs={2}>
            <MockItem name={'Angular'}><img className="icon" src="images/languages/angularjs.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
              <MockItem name={'React'}><img className="icon" src="images/languages/react.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
            <MockItem name={'jQuery'}><img className="icon" src="images/languages/jquery.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
            <MockItem name={'nextJs'}><img className="icon" src="images/languages/nextjs.svg" /></MockItem>
          </Grid>

          <Grid xs={2}>
          </Grid>
          <Grid xs={2}>
            Backend
          </Grid>
          <Grid xs={2}>
            <MockItem name={'nodeJs'}><img className="icon" src="images/languages/nodejs.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
            <MockItem name={'nextJs'}><img className="icon" src="images/languages/nestjs.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
            <MockItem name={'expressJs'}><img className="icon" src="images/languages/expressjs.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
          </Grid>
          
          <Grid xs={2}>
            <MockItem name='PHP'><img className="icon" src="images/languages/php.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
            <MockItem name={'Symfony'}><img className="icon" src="images/languages/symfony.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
            <MockItem name={'CodeIgniter'}><img className="icon" src="images/languages/codeigniter.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
          </Grid>
          <Grid xs={2}>
          </Grid>
          <Grid xs={2}>
          </Grid>

          <Grid xs={2}>
            <MockItem name={'Database'}><img className="icon" src="images/languages/database.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
            <MockItem name={'mySql'}><img className="icon" src="images/languages/mysql.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
            <MockItem name={'MongoDB'}><img className="icon" src="images/languages/mongo.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
              <MockItem name={'DynamoDB'}><img className="icon" src="images/languages/dynamodb.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
          </Grid>
          <Grid xs={2}>
          </Grid>

          <Grid xs={2}>
            <MockItem name={'CSS'}><img className="icon" src="images/languages/css3.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
            <MockItem name={'Bootstrap'}><img className="icon" src="images/languages/bootstrap.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
          </Grid>
          <Grid xs={2}>
          </Grid>
          <Grid xs={2}>
          </Grid>
          <Grid xs={2}>
          </Grid>

          <Grid xs={2}>
            <MockItem name={'Git'}><img className="icon" src="images/languages/git.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
            <MockItem name={'BitBucket'}><img className="icon" src="images/languages/bitbucket.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
            <MockItem name={'Github'}><img className="icon" src="images/languages/github.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
          </Grid>
          <Grid xs={2}>
          </Grid>
          <Grid xs={2}>
          </Grid>

          <Grid xs={2}>
            <MockItem ><img className="icon" src="images/languages/git.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
            <MockItem name={'HTML'}><img className="icon" src="images/languages/html5.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
            <MockItem name={'Typescript'}><img className="icon" src="images/languages/typescript.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
              <MockItem name={'Ionic'}><img className="icon" src="images/languages/ionic.svg" /></MockItem>
          </Grid>
          <Grid xs={2}>
          </Grid>
          <Grid xs={2}>
          </Grid>
        </Grid.Container>
    );
}
