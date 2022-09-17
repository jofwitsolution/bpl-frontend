import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Better Place Living",
  description:
    "At Better place living our key objectives revolve around promoting independence. Our role is to give our customers the tools they need to get back on their feet. Our team of professional are dedicated to creating a society where vulnerable people can be heard, we work with our customers so that our support is led by our customer and their choices.",
  keywords:
    "better place living, betterlivingplace, betterplace, betterplaceliving.co.uk, betterliving, bpl",
};

export default Meta;
