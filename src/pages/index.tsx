/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-12-13 13:08:03
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-12-13 14:06:57
 * @FilePath: \my-website\src\pages\index.tsx
 * @Description:
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  console.log("====", siteConfig);
  return (
    <div className="hero">
      <div className={styles.welcome_intro}>
        <h1 className={styles.hero_title}>
          <span style={{ color: "var(--ifm-color-primary)" }}>
            {siteConfig.title}
          </span>
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
      <div className={styles.welcome_svg}>
        <img src={useBaseUrl("/img/program.svg")} />
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
