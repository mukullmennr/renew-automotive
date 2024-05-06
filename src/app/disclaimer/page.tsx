import React from "react";
import style from "./page.module.scss";
import Container from "@/components/Container/Container";
import Common_hero from "@/components/common_hero/Common_hero";
import { disclaimer } from "@/data/hero";
const page = () => {
    return (
        <div>
            <Common_hero data={disclaimer} />
            <Container>
                <div className={style.disclaimer}>
                    <div>
                        <p>Renew Auto Motive Services Disclaimer</p>
                    </div>
                    <div>
                        <h3>Covid liability waiver:</h3>
                        <p>
                            &quot;Under Georgia law, there is no liability for
                            an injury or death of an individual entering these
                            premises if such injury or death results in the
                            inherent risk of contracting COVID-19. You are
                            assuming this risk by entering these premises.
                            O.C.G.A § 51-16-3&quot;
                        </p>
                    </div>
                    <div>
                        <h3>Uber/Lyft liability waiver:</h3>
                        <p>
                            The parties of Renew Automotive Services, The Uber
                            Service, and The Lyft Platform hereby represents and
                            warrants that (a) it has full power and authority to
                            enter into this Agreement and perform its
                            obligations hereunder, (b) such party&apos;s
                            acceptance of this Agreement, as well as such
                            party&apos;s performance of the obligations set
                            forth in this Agreement, does not and will not
                            violate any other agreement to which such party is a
                            party, and (c) it is duly organized, validly
                            existing and in good standing under the laws of the
                            jurisdiction of its origin. Customer should also be
                            aware that these companies will receive information
                            related to certain Customer Rides, including but not
                            limited to, for example, name, time of ride, and
                            ride cost. Customer acknowledges and agrees that by
                            providing these companies an individual&apos;s phone
                            number, such individual shall receive automated
                            communications relating to the ride purchased.
                            Customer acknowledges that Renew Automotive Services
                            is not responsible for any damage or loss while
                            partaking in these ride services.
                        </p>
                    </div>
                    <div>
                        <h3>Employees only:</h3>
                        <p>
                            Renew Automotive Services is not responsible for any
                            injury or accident that occurs on the premises of
                            the property. Compliant signage is posted in areas
                            where customers are not allowed access.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default page;
