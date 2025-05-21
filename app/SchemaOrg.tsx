'use client'
import React from "react";
import Script from "next/script"

const SchemaOrg = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                type="application/ld+json"
                id="schema-org"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "James Conrad Architects",
                        "url": "https://www.conradarchitect.com",
                        "logo": "https://www.conradarchitect.com/assets/images/logo.png",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+1 949-233-8625",
                            "contactType": "customer service",
                            "areaServed": "US",
                            "availableLanguage": "en"
                        },
                        "sameAs": [
                            "https://www.instagram.com/james_conrad_architects",
                        ]
                    }`,
                }}
            />
        </>
    )
}

export default SchemaOrg