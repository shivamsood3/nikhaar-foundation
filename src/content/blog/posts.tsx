import Link from "next/link";
import type { ReactNode } from "react";

export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  readingTime: string;
  category: string;
  keywords: string[];
  body: ReactNode;
};

const HowToDonateArticle = () => (
  <>
    <p>
      Section 80G of the Income Tax Act, 1961 lets an Indian taxpayer claim a
      deduction on donations to eligible non-governmental organisations. In
      practice this means a large share of what you give to a registered NGO
      comes back to you at the end of the financial year. The rules are simple
      once you know them, and worth knowing before you write the cheque.
    </p>
    <p>
      This is a straight walk through of how the deduction works, what to
      collect at the time of donating, and what the common mistakes look like.
    </p>

    <h2>What Section 80G actually is</h2>
    <p>
      Section 80G is the provision that gives a tax deduction for donations to
      approved charitable institutions. It sits alongside Section 12A, which is
      the registration that confers charitable status on the organisation
      itself. The two go together. An NGO that is only 12A registered is a
      valid charity, but donations to it are not automatically deductible. An
      NGO that is both 12A and 80G registered is a valid charity to which
      donations qualify for a deduction under Section 80G.
    </p>
    <p>
      Since 2021, every 80G registered institution is issued a sixteen digit
      Unique Registration Number, called the 80G URN. That URN is what makes a
      receipt valid at the point of your income tax return.
    </p>

    <h2>How much of your donation you can claim</h2>
    <p>
      Section 80G organisations fall into two broad categories:
    </p>
    <ul>
      <li>
        <strong>100% deduction</strong>. Certain government funds and specified
        institutions (Prime Minister's National Relief Fund, National Defence
        Fund, and a short list of others) allow the full amount to be deducted.
      </li>
      <li>
        <strong>50% deduction</strong>. This is the bucket that most private
        NGOs, including Nikhaar Foundation, sit in. Half of the eligible
        donation amount reduces your taxable income.
      </li>
    </ul>
    <p>
      For most private NGOs there is also a qualifying limit: the aggregate
      deduction under Section 80G is capped at ten per cent of your adjusted
      gross total income. For most individual donors this cap never binds.
    </p>

    <h2>The documents you need at the time of donating</h2>
    <p>
      Before parting with the money, the receipt you should expect back from
      the NGO must carry:
    </p>
    <ul>
      <li>The NGO's registered name</li>
      <li>The NGO's PAN</li>
      <li>Their 80G registration number and, since 2021, the sixteen digit 80G URN</li>
      <li>Your name, PAN, and address as the donor</li>
      <li>The mode of payment (UPI, NEFT, cheque, and so on)</li>
      <li>The transaction reference from your bank or UPI app</li>
      <li>The date and the amount</li>
    </ul>
    <p>
      A receipt without the URN is not going to survive scrutiny. This is
      worth checking before the donation, not after.
    </p>

    <h2>How to donate and claim, step by step</h2>
    <ol>
      <li>
        <strong>Pick a 12A and 80G registered NGO.</strong> You can verify
        registration on the Income Tax Department's e-filing portal or ask the
        NGO for the certificates.
      </li>
      <li>
        <strong>Avoid cash for donations above two thousand rupees.</strong>{" "}
        Under Section 80G(5D), cash donations above that threshold are not
        eligible for deduction. Use UPI, NEFT, IMPS, RTGS, or cheque instead.
      </li>
      <li>
        <strong>Transfer the money.</strong> Keep the transaction reference or
        UTR from your bank or UPI app.
      </li>
      <li>
        <strong>Email the NGO with your PAN and the transaction details.</strong>{" "}
        A properly run NGO will issue a digitally signed receipt within a
        working day or two.
      </li>
      <li>
        <strong>File your return.</strong> Report the donation in Schedule 80G
        of your Income Tax Return. Enter the NGO name, PAN, address, amount,
        and mode of payment. The utility will calculate the deduction.
      </li>
      <li>
        <strong>Retain the receipt.</strong> The Income Tax Department can ask
        for the receipt during assessment. Keep it with your ITR papers for
        at least six years.
      </li>
    </ol>

    <h2>What to look for in an NGO before you give</h2>
    <p>
      Registration status is a floor, not a signal of quality. The floor
      matters. Above it, a serious donor should look for:
    </p>
    <ul>
      <li>
        A public statement of what the NGO does, in what geography, for whom
      </li>
      <li>
        Photographs and reports from actual delivered work, not renderings or
        stock imagery
      </li>
      <li>
        A specific way to give, with bank and UPI details published rather
        than gated behind a form
      </li>
      <li>
        A named human you can email if you have a question
      </li>
      <li>
        A modest administrative footprint. Large overheads signal a large
        organisation, not necessarily a bad one, but as a small donor you get
        more leverage in a smaller one
      </li>
    </ul>

    <h2>Common mistakes that void the deduction</h2>
    <ul>
      <li>
        <strong>Cash above two thousand rupees.</strong> Not eligible. Split
        into smaller cash donations does not fix this.
      </li>
      <li>
        <strong>Anonymous donations.</strong> If the receipt does not carry
        your PAN, the deduction may not survive scrutiny.
      </li>
      <li>
        <strong>Wrong 80G registration number.</strong> Cross check the URN on
        the receipt against the NGO's certificate.
      </li>
      <li>
        <strong>Donating to unregistered organisations.</strong> Warm intent is
        not the same as a valid deduction.
      </li>
      <li>
        <strong>Foreign source contributions to a non-FCRA holder.</strong> If
        you are giving from outside India or through a foreign source, the NGO
        needs a separate Foreign Contribution Regulation Act (FCRA)
        registration. Ask before you transfer.
      </li>
    </ul>

    <h2>An honest word on why Nikhaar Foundation is worth considering</h2>
    <p>
      Nikhaar Foundation is registered under Section 12A and Section 80G, with
      an 80G URN of AAGCN8863PF20241, and is CSR-1 registered with the
      Ministry of Corporate Affairs (registration number CSR00107287). Our
      programmes run in Delhi's underserved neighbourhoods and cover water
      conservation, clean air, and children's education and welfare. If you
      would rather see the work first, our{" "}
      <Link href="/impact">impact page</Link> is the shortest route in. If you
      are ready to give, the account and UPI details, along with the 80G
      receipt flow, are on our{" "}
      <Link href="/support#donate">donate page</Link>.
    </p>
  </>
);

const Csr1ExplainedArticle = () => (
  <>
    <p>
      Section 135 of the Companies Act, 2013 makes Corporate Social
      Responsibility a statutory obligation for qualifying Indian companies.
      Around ten years of practice have added a lot of paperwork around that
      one sentence. This is a straight explanation of how CSR-1 registration
      works, why your NGO partner has to hold it, and how a Company Secretary
      or CSR head should verify eligibility before a rupee moves.
    </p>

    <h2>The Section 135 rule, in one line</h2>
    <p>
      An Indian company meeting any one of three thresholds in the immediately
      preceding financial year — a net worth of five hundred crore rupees or
      more, a turnover of one thousand crore rupees or more, or a net profit
      of five crore rupees or more — must spend at least two per cent of its
      average net profits from the last three years on CSR activities. The
      unspent portion generally has to be transferred to an unspent CSR
      account or, in some cases, to a Schedule VII fund.
    </p>

    <h2>What CSR-1 is</h2>
    <p>
      CSR-1 is a form filed by an implementing agency (typically an NGO) with
      the Ministry of Corporate Affairs to register itself for undertaking CSR
      activities. Since April 2021, an NGO must be CSR-1 registered before it
      can receive CSR funds from a company under Section 135. On successful
      registration, the MCA issues a unique CSR Registration Number in the
      format CSR00XXXXXX.
    </p>
    <p>
      Nikhaar Foundation's CSR Registration Number, for reference, is
      CSR00107287.
    </p>

    <h2>What CSR-1 registration proves</h2>
    <ul>
      <li>
        The organisation is a registered public trust, registered society, or
        Section 8 company
      </li>
      <li>
        It holds valid registration under Sections 12A and 80G of the Income
        Tax Act, 1961
      </li>
      <li>
        It has a track record of at least three financial years in undertaking
        similar activities (with limited exceptions)
      </li>
      <li>
        It has been through the identity and compliance verification the MCA
        applies at the point of CSR-1 registration
      </li>
    </ul>

    <h2>Schedule VII: the activities your CSR spending can fund</h2>
    <p>
      Section 135 is anchored to Schedule VII of the Companies Act, which lists
      the activities eligible as CSR spending. There are eleven main clauses.
      The ones a lot of small and mid-sized NGOs cover include:
    </p>
    <ul>
      <li>
        <strong>(i)</strong> Eradicating hunger, poverty and malnutrition;
        promoting healthcare and sanitation; safe drinking water
      </li>
      <li>
        <strong>(ii)</strong> Promoting education, including special education
      </li>
      <li>
        <strong>(iv)</strong> Ensuring environmental sustainability, ecological
        balance, protection of flora and fauna, animal welfare, agroforestry,
        conservation of natural resources and quality of soil, air and water
      </li>
      <li>
        <strong>(vii)</strong> Training to promote rural sports, nationally
        recognised sports, Paralympic sports and Olympic sports
      </li>
    </ul>
    <p>
      A responsible CSR head will map every scoped project cleanly to one
      Schedule VII clause. This is what your Company Secretary will need to
      cite in the Annual Report on CSR.
    </p>

    <h2>How to verify an NGO's CSR-1 before signing the MoU</h2>
    <ol>
      <li>
        Ask the NGO for their CSR Registration Number, PAN, and CSR-1
        certificate. Everything reputable will send this in the first email.
      </li>
      <li>
        Cross verify on the MCA portal at mca.gov.in under the CSR services
        section. The number should return the NGO's name and registration
        details.
      </li>
      <li>
        Ask for a copy of the 12A certificate and the 80G certificate carrying
        the sixteen digit URN. These are pre-conditions of CSR-1 and confirm
        active tax status.
      </li>
      <li>
        Ask for the audited financial statements of the previous financial
        year and the last two years of programme reports.
      </li>
      <li>
        Ask for a costed proposal that maps to a specific Schedule VII clause.
      </li>
    </ol>

    <h2>The documentation pack your CSR committee will actually want</h2>
    <p>
      For a Company Secretary, the following pack tends to be sufficient to
      take a proposal to the CSR committee:
    </p>
    <ul>
      <li>CSR-1 certificate from the Ministry of Corporate Affairs</li>
      <li>Section 12A registration certificate</li>
      <li>Section 80G registration certificate with the URN</li>
      <li>PAN card of the organisation</li>
      <li>Cancelled cheque for the CSR bank account</li>
      <li>Organisation profile with governance, leadership, and past work</li>
      <li>Audited financials for the last completed financial year</li>
      <li>Costed project proposal aligned to Schedule VII</li>
      <li>Draft Memorandum of Understanding for the project</li>
    </ul>

    <h2>Common mistakes CSR heads should avoid</h2>
    <ul>
      <li>
        Transferring CSR funds to a non-CSR-1 registered organisation.
        Ineligible under Section 135 as amended.
      </li>
      <li>
        Mapping a project to more than one Schedule VII clause without a
        clear split. Auditors flag this.
      </li>
      <li>
        Accepting an unsigned or generic utilisation report at project end.
        Insist on a formal utilisation report with photographs and
        beneficiary numbers.
      </li>
      <li>
        Missing the Impact Assessment requirement for larger projects. Above
        a specified threshold, an impact assessment by an independent agency
        is mandatory.
      </li>
    </ul>

    <h2>How to talk to Nikhaar Foundation about a CSR project</h2>
    <p>
      Nikhaar Foundation is CSR-1 registered (CSR00107287), 12A registered,
      and 80G registered (URN AAGCN8863PF20241) under the Income Tax Act,
      1961. Our programmes map to Schedule VII (i), (ii), and (iv). If you
      would like a costed proposal that fits your Schedule VII focus and CSR
      budget, our{" "}
      <Link href="/csr">CSR partnerships page</Link> has the full
      documentation checklist and the four step partnership process. Or write
      to info@nikhaarfoundation.org and we will come back within a working
      day.
    </p>
  </>
);

const DelhiWaterArticle = () => (
  <>
    <p>
      A short walk through any dense settlement in Delhi tells you more about
      the water problem than most published statistics. Plastic drums line the
      lanes. Somebody is walking back with two full jerry cans, somebody else
      is walking out empty. Every few days a tanker rolls in and the queue
      restructures the morning. The people paying the highest cost, per litre
      and per hour, are the ones with the least income.
    </p>
    <p>
      This is a plain look at what the water access problem in Delhi's basti
      settlements actually is, why it has proven so persistent, and what
      finally seems to move it.
    </p>

    <h2>The scale of the problem</h2>
    <p>
      Delhi is one of the most water stressed metropolitan regions in India.
      The Delhi Jal Board supplies water to roughly ninety per cent of the
      city on paper. In practice, coverage is highly uneven, service is
      intermittent, and quality varies by neighbourhood. The gap between the
      network's official reach and its lived reliability is where informal
      settlements sit.
    </p>
    <p>
      For a household in a formal apartment block, water is a background
      utility. For a household in a basti, water is a daily task with a
      predictable time cost, a variable financial cost, and an unpredictable
      quality cost. Skipping the task is not an option.
    </p>

    <h2>Why bastis are hit hardest</h2>
    <p>
      Three overlapping reasons. First, network reach: piped supply into
      unplanned settlements is patchy, sometimes because of policy, sometimes
      because of physical layout. Second, storage: without a rooftop tank or
      a reliable pump, there is nowhere to buffer the supply against
      intermittency. Third, price: when supply is missing, private tankers
      fill the gap at rates several times the tariff paid by a domestic
      connection.
    </p>
    <p>
      Layered on top: collection is time consuming, and that time falls
      disproportionately on women and older children. Two hours of water
      collection is two hours out of a working day, a study day, or a rest
      day. Over a month it is a very large number.
    </p>

    <h2>What actually works</h2>
    <p>
      Interventions in water access tend to arrive as one of three types.
      Not all are equal.
    </p>
    <ul>
      <li>
        <strong>Awareness campaigns.</strong> Useful, but insufficient on
        their own. A household that already spends two hours a day fetching
        water does not need to be told water is precious.
      </li>
      <li>
        <strong>Tanker subsidies.</strong> Immediate relief but not durable.
        Once the subsidy ends the queue and the tanker fee return.
      </li>
      <li>
        <strong>Physical infrastructure at the point of use.</strong> A
        community pump, a shared storage tank, a bore refurbishment, a
        connection extension. These interventions cost more upfront and are
        the ones that quietly disappear from a lane's list of daily
        problems.
      </li>
    </ul>

    <h2>Case study: Indira Gandhi Camp, Kasturba Nagar</h2>
    <p>
      Indira Gandhi Camp is a dense settlement in Kasturba Nagar in central
      Delhi. Like most of Delhi's camps, water arrived irregularly and from a
      distance. Collecting it was a daily task measured in hours rather than
      minutes.
    </p>
    <p>
      We funded and installed a community water pump inside the settlement,
      and handed it over to the residents. The decision on siting was made
      with the people who would use it. There is no fee attached, and no
      continuing role for the foundation in its operation. Around 3,000
      people now have water at their doorstep. The queue that structured the
      first two hours of the day in that lane no longer exists.
    </p>
    <p>
      It is not a complicated intervention. It cost less than most
      corporate offsite budgets. It had simply never been anyone's job.
    </p>

    <h2>What good funders look for in water access work</h2>
    <ul>
      <li>
        A named settlement with a stated household count, not a district
        estimate
      </li>
      <li>
        A physical intervention with a stated cost, not a workshop with a
        stated attendance
      </li>
      <li>
        A handover to residents rather than a permanent operational
        dependence on the funder
      </li>
      <li>
        A short chain of custody between the money and the ground
      </li>
    </ul>
    <p>
      This last point matters more than any other. In the sector, most
      water spending flows through multiple intermediaries. The chain of
      custody explains a large part of why it takes so many rupees to reach
      the tap.
    </p>

    <h2>How to help</h2>
    <p>
      Nikhaar Foundation is a small, 12A, 80G, and CSR-1 registered NGO in
      Delhi. Our water conservation and access programme funds community
      pumps and runs on-the-ground awareness campaigns like{" "}
      <strong>#DefendWater</strong>. If you want to fund the next pump or
      contribute more broadly to the programme, our{" "}
      <Link href="/support#donate">donate page</Link> has the bank and UPI
      details for individual donors under Section 80G. If you represent a
      company looking to deploy Section 135 CSR spending against Schedule
      VII (i) or (iv), our{" "}
      <Link href="/csr">CSR partnerships page</Link> is the fastest route in.
    </p>
  </>
);

export const posts: Post[] = [
  {
    slug: "how-to-donate-to-an-ngo-in-india-80g-tax-deduction",
    title: "How to donate to an NGO in India and claim your 80G tax deduction",
    description:
      "A step-by-step guide for Indian donors on how to donate to a 12A and 80G registered NGO, get a valid receipt, claim the Section 80G deduction on your income tax return, and avoid the common mistakes that void the deduction.",
    excerpt:
      "The Section 80G deduction can bring a large share of what you give back to you at tax filing. The rules are simple once you know them, and worth knowing before you write the cheque.",
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    readingTime: "9 min read",
    category: "Donor guide",
    keywords: [
      "how to donate to NGO in India",
      "80G tax deduction",
      "Section 80G explained",
      "80G URN receipt",
      "12A 80G registered NGO",
      "NGO donation tax India",
    ],
    body: <HowToDonateArticle />,
  },
  {
    slug: "csr-1-registration-section-135-explained",
    title: "CSR-1 registration explained: what it means for your Section 135 CSR spending",
    description:
      "A CSR head's guide to CSR-1 registration under the Companies Act, 2013, how to verify an NGO's Section 135 eligibility, which Schedule VII activities are covered, and the documentation pack a CSR committee actually needs.",
    excerpt:
      "How to check whether an NGO is CSR-1 registered under the Companies Act, 2013, which Schedule VII activities your CSR budget can fund, and the exact documentation pack a Company Secretary needs to close.",
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    readingTime: "10 min read",
    category: "CSR partnerships",
    keywords: [
      "CSR-1 registration",
      "Section 135 Companies Act",
      "Schedule VII CSR activities",
      "CSR compliance India",
      "how to spend CSR budget",
      "MCA CSR registration",
    ],
    body: <Csr1ExplainedArticle />,
  },
  {
    slug: "delhi-water-access-basti-community-pumps",
    title: "Delhi's water access problem, one basti at a time",
    description:
      "A plain look at why water access is a daily task in Delhi's underserved settlements, what actually moves the problem, and a case study from Indira Gandhi Camp in Kasturba Nagar where a community water pump brought 3,000 people water at their doorstep.",
    excerpt:
      "Awareness campaigns and tanker subsidies help at the margin. What actually moves water access in a basti is physical infrastructure at the point of use, handed over to residents.",
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    readingTime: "7 min read",
    category: "Programmes",
    keywords: [
      "Delhi water crisis",
      "Delhi slum water",
      "water scarcity Delhi",
      "Delhi basti water",
      "Kasturba Nagar water",
      "water conservation Delhi",
    ],
    body: <DelhiWaterArticle />,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
