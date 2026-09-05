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
  keyTakeaways?: string[];
  faqs?: { q: string; a: string }[];
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

const HowToChooseNgoArticle = () => (
  <>
    <p>
      An NGO in India is trustworthy when four things are true: it holds valid{" "}
      <strong>Section 12A</strong> and <strong>Section 80G</strong> registrations
      under the Income Tax Act, 1961; it can produce its{" "}
      <strong>CSR-1 registration</strong> if it accepts corporate donations under
      Section 135 of the Companies Act; it publishes named beneficiaries in named
      geographies with photographs from the actual work; and it issues digitally
      signed receipts within a working day or two of a donation. Everything else
      is a nice-to-have. These four are the floor.
    </p>
    <p>
      This is a checklist for individual donors on how to verify each of these
      four claims yourself, before any money moves. It works for a five hundred
      rupee UPI donation and it works for a fifty lakh cheque.
    </p>

    <h2>What "trustworthy" actually means for an Indian NGO</h2>
    <p>
      There is no central "trust" rating for Indian NGOs. The Ministry of
      Corporate Affairs, the Income Tax Department, and the Ministry of Home
      Affairs each verify a different slice of an organisation, and taken
      together they cover most of what a serious donor needs to check. A
      trustworthy NGO is one that has cleared each of the applicable verification
      layers, keeps the paperwork current, and can hand you a copy of every
      certificate within a working day of you asking.
    </p>
    <p>
      The word "verified" is often used loosely by donation aggregator platforms.
      A verified listing on a giving portal is not a substitute for looking at
      the source documents yourself. This guide walks you through the source
      documents, in order.
    </p>

    <h2>The seven checks, in order</h2>

    <h3>1. Section 12A registration under the Income Tax Act, 1961</h3>
    <p>
      This is the registration that confers charitable status. Without it, the
      organisation's income is not exempt from tax and it cannot legally claim to
      be a charity. Ask for a copy of the 12A certificate. It carries a
      registration number and the date of grant. Since April 2021 the Income Tax
      Department has issued a Unique Registration Number for 12A as well; the
      certificate carries it.
    </p>
    <p>
      You can cross verify status on the Income Tax Department's e-filing portal
      at incometax.gov.in under the tax exemption search. A properly registered
      organisation will return its name against its PAN.
    </p>

    <h3>2. Section 80G registration and the sixteen digit URN</h3>
    <p>
      Section 80G is what makes your donation deductible. The certificate is
      separate from 12A and carries a sixteen digit Unique Registration Number.
      Since 2021, an 80G receipt is not valid at income tax filing without this
      URN. Ask for the certificate and check that the URN on any donation
      receipt matches what the certificate says. If they do not match, do not
      claim the deduction.
    </p>

    <h3>3. CSR-1 registration under the Companies Act, 2013</h3>
    <p>
      This only matters if you or your company are donating from a corporate
      Indian entity subject to Section 135. If so, the NGO must be CSR-1
      registered with the Ministry of Corporate Affairs. The registration number
      looks like CSR00XXXXXX. You can verify it on the MCA portal at mca.gov.in
      under the CSR services section.
    </p>
    <p>
      A retail donor does not need CSR-1 to claim 80G. But an NGO that holds
      CSR-1 has been through an additional layer of MCA scrutiny, which is a
      useful signal even if you personally are not routing CSR funds.
    </p>

    <h3>4. FCRA registration for foreign contributions</h3>
    <p>
      If you are donating from outside India or from a foreign source (an
      overseas bank account, a foreign employer's payroll giving programme, a
      foundation registered abroad), the NGO must hold Foreign Contribution
      Regulation Act registration issued by the Ministry of Home Affairs. Without
      FCRA, foreign contributions are not legally receivable. Ask before you
      transfer.
    </p>

    <h3>5. Audited financial statements from the last completed financial year</h3>
    <p>
      A real NGO publishes or shares on request its audited financials. Look for
      three things:
    </p>
    <ul>
      <li>
        A statement of income and expenditure with programme spending broken out
        by area
      </li>
      <li>
        Administrative expenses as a proportion of total spending (a modest
        percentage is a good sign, and there is no single correct number)
      </li>
      <li>
        A clean auditor's report from a Chartered Accountant firm
      </li>
    </ul>

    <h3>6. Programme reports with named locations and photographs</h3>
    <p>
      Do the reports name specific villages, settlements, or schools? Are there
      photographs from the actual work rather than stock imagery of children
      generically? Is there a beneficiary count that is stated rather than
      extrapolated? These are the small signals that separate delivery from
      paperwork.
    </p>

    <h3>7. A named human you can email</h3>
    <p>
      A registered NGO with real work to point to is easy to reach. There should
      be a specific person, a specific email address, and a reply within two
      working days. If your first email into an NGO goes into a general inbox and
      never comes out, this is a signal.
    </p>

    <h2>Quick reference: verification sources</h2>
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-line">
            <th className="py-3 pr-4 font-semibold text-ink">Registration</th>
            <th className="py-3 pr-4 font-semibold text-ink">Authority</th>
            <th className="py-3 font-semibold text-ink">Where to verify</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          <tr>
            <td className="py-3 pr-4 font-medium text-ink">12A</td>
            <td className="py-3 pr-4">Income Tax Department</td>
            <td className="py-3">incometax.gov.in tax exemption search</td>
          </tr>
          <tr>
            <td className="py-3 pr-4 font-medium text-ink">80G</td>
            <td className="py-3 pr-4">Income Tax Department</td>
            <td className="py-3">Same portal, 80G lookup by URN</td>
          </tr>
          <tr>
            <td className="py-3 pr-4 font-medium text-ink">CSR-1</td>
            <td className="py-3 pr-4">Ministry of Corporate Affairs</td>
            <td className="py-3">mca.gov.in CSR services section</td>
          </tr>
          <tr>
            <td className="py-3 pr-4 font-medium text-ink">FCRA</td>
            <td className="py-3 pr-4">Ministry of Home Affairs</td>
            <td className="py-3">fcraonline.nic.in</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Red flags to walk away from</h2>
    <ul>
      <li>
        The receipt does not carry the sixteen digit 80G URN.
      </li>
      <li>
        The NGO cannot produce a copy of the 12A or 80G certificate on request.
      </li>
      <li>
        Programme photographs look like stock imagery or repeat across multiple
        NGOs.
      </li>
      <li>
        Beneficiary numbers are unusually round or grow linearly year over year
        without explanation.
      </li>
      <li>
        Cash donation requests above two thousand rupees, which are not eligible
        under Section 80G(5D).
      </li>
      <li>
        Aggressive follow up after a small donation with pressure to commit to a
        much larger recurring amount.
      </li>
      <li>
        An audited financial statement that is more than eighteen months old.
      </li>
    </ul>

    <h2>How to actually make the donation once you have verified</h2>
    <ol>
      <li>Email the NGO with the amount you plan to give and ask for the bank and UPI details.</li>
      <li>Transfer the money by UPI, IMPS, NEFT, or cheque. Avoid cash above two thousand rupees.</li>
      <li>Reply with the transaction reference and your full name, PAN, and address.</li>
      <li>Wait for the digitally signed 80G receipt carrying the URN.</li>
      <li>File the deduction under Schedule 80G at income tax filing time.</li>
    </ol>

    <h2>Where Nikhaar Foundation sits against this checklist</h2>
    <p>
      In the interest of putting our own numbers where our mouth is: Nikhaar
      Foundation is 12A registered, 80G registered (URN AAGCN8863PF20241), and
      CSR-1 registered (CSR00107287) with the Ministry of Corporate Affairs. Our
      PAN is AAGCN8863P. Every campaign photograph on this website is from a
      drive, installation, or event we actually ran in Delhi. If you would like
      to see the audited financials or any of the certificates, write to
      info@nikhaarfoundation.org and we will send them within a working day.
    </p>
    <p>
      If the checklist above matches how you would like to give, our{" "}
      <Link href="/support#donate">donate page</Link> is the shortest route in.
      If you want to see the work first, start with our{" "}
      <Link href="/impact">impact page</Link>.
    </p>
  </>
);

const HowToChooseNgoFaqs = [
  {
    q: "How can I check if an NGO in India is genuine?",
    a: "Ask for copies of the 12A and 80G certificates, verify the PAN and 80G URN on the Income Tax Department's e-filing portal, and if the NGO accepts corporate donations, verify the CSR-1 number on the Ministry of Corporate Affairs portal. A genuine NGO also publishes audited financials from the last completed financial year and can share programme reports with named locations.",
  },
  {
    q: "Is 12A the same as 80G?",
    a: "No. Section 12A confers charitable status on the NGO itself and makes its own income tax exempt. Section 80G is a separate registration that makes donations to the NGO deductible for the donor. A trustworthy NGO holds both. Since 2021, every 80G registered NGO carries a sixteen digit Unique Registration Number.",
  },
  {
    q: "Do I need CSR-1 to be able to claim 80G on my donation?",
    a: "No. CSR-1 is only relevant if you are donating from a company subject to Section 135 of the Companies Act, 2013. For individual donors, the 12A and 80G registrations together are sufficient for claiming a tax deduction.",
  },
  {
    q: "What is the highest 80G deduction I can claim?",
    a: "It depends on the NGO. Certain specified funds allow a 100 per cent deduction. Most private NGOs, including Nikhaar Foundation, fall in the 50 per cent bucket. The total 80G deduction is capped at ten per cent of your adjusted gross total income in the year, but for most individual donors this cap does not bind.",
  },
  {
    q: "Can I claim 80G on cash donations?",
    a: "You can claim a deduction on cash donations up to two thousand rupees. Cash donations above two thousand rupees are not eligible under Section 80G(5D). For larger amounts, use UPI, NEFT, IMPS, RTGS, or cheque.",
  },
  {
    q: "What is the difference between a verified NGO listing and actual verification?",
    a: "Giving portals label NGOs as verified after conducting their own vetting, which is useful as a starting point but is not a substitute for looking at the source documents. Ask for the 12A and 80G certificates, the PAN, and the audited financials. Cross verify on the Income Tax Department and MCA portals.",
  },
];

const NgosInDelhiArticle = () => (
  <>
    <p>
      Delhi is home to a very large number of registered NGOs. The ones actually
      delivering visible on-the-ground work in water conservation, clean air,
      and children's welfare are a much smaller list. This guide covers what a
      Delhi-focused NGO landscape looks like in practice, how to separate
      delivery from paperwork, and where to start if you have a defined budget
      you would like to route into work you can see.
    </p>
    <p>
      It is written for individual donors, Delhi-based CSR heads, and grant
      makers who want to fund named work in named neighbourhoods.
    </p>

    <h2>The Delhi NGO landscape in one paragraph</h2>
    <p>
      Delhi has one of the highest densities of registered NGOs in India,
      concentrated in South Delhi, Central Delhi, and along the Yamuna. The
      programme areas that dominate are education, health, women's welfare,
      water, and environment. The size distribution is extremely skewed. A very
      small number of NGOs account for most of the spending, and a very large
      number operate on lean budgets in specific neighbourhoods. This second
      group is where a small donation buys the most visible outcome.
    </p>

    <h2>Why Delhi-based work matters if you live in Delhi</h2>
    <p>
      Two reasons. First, the outcomes are legible: you can see the settlement,
      you can meet the residents, you can watch the intervention change the
      lane. Second, transaction cost is low: an in-person site visit takes an
      hour, not a day. Delhi donors who fund Delhi work almost always develop a
      stronger relationship with the NGO and a better understanding of what
      their money is doing than donors who fund at distance.
    </p>

    <h2>The three programme areas worth focusing on</h2>

    <h3>Water access in bastis</h3>
    <p>
      Water is the single highest leverage area a small NGO can work in inside
      Delhi. Camps and unplanned settlements are the parts of the city where
      piped supply is least reliable, tanker prices are highest, and time cost
      of collection falls disproportionately on women and older children. A
      community water pump, a shared storage tank, or a bore refurbishment
      changes a lane's daily rhythm in a way an awareness campaign cannot.
    </p>
    <p>
      For context, we funded, installed, and handed over a community water
      pump at Indira Gandhi Camp in Kasturba Nagar. Around 3,000 people now
      have water at their doorstep. The full case study is on our{" "}
      <Link href="/impact">impact page</Link>, and the wider case for physical
      infrastructure over awareness campaigns is in our post on{" "}
      <Link href="/blog/delhi-water-access-basti-community-pumps">
        Delhi's water access problem
      </Link>
      .
    </p>

    <h3>Clean air and the environment</h3>
    <p>
      Delhi's air quality problem is not an abstraction. It is measured in
      hospital visits, missed school days, and shortened lives, and it falls
      hardest on the people who work outdoors and live in the least insulated
      homes. Programmes worth funding here tend to combine three things:
      neighbourhood-level cleanliness drives, waste segregation education, and
      campaigns run with a legitimate institutional partner such as the Delhi
      Police that give the message reach.
    </p>

    <h3>Children's education and welfare</h3>
    <p>
      Children in Delhi's bastis are rarely short on ability. They are short on
      the things that let ability show: a quiet place to study, materials,
      encouragement, and adults who expect something of them. Programmes worth
      funding tend to be unglamorous and repetitive rather than event driven,
      because that is what actually moves a child forward.
    </p>

    <h2>What separates delivery-focused NGOs from paperwork-focused ones</h2>
    <p>
      A quick way to sort in either direction:
    </p>
    <ul>
      <li>
        <strong>Named locations.</strong> A delivery-focused NGO can name the
        settlement, the lane, and the school it works in. A paperwork-focused
        NGO talks about districts and states.
      </li>
      <li>
        <strong>Photographs from the work itself.</strong> Not stock imagery,
        not renderings. A delivery-focused NGO's own photographs are recognisable
        as one place, over time.
      </li>
      <li>
        <strong>Modest overhead.</strong> A small Delhi NGO doing real work will
        usually have a very lean administrative footprint. Not because that
        makes them better, but because it reflects a preference for spending
        where it visibly matters.
      </li>
      <li>
        <strong>A short chain of custody.</strong> Between the donation arriving
        and it turning into a visible outcome, there should be as few
        intermediaries as possible. A delivery-focused NGO is the intermediary.
      </li>
      <li>
        <strong>A person you can email.</strong> Not a form. Not a chatbot.
        A person who replies.
      </li>
    </ul>

    <h2>How to visit or verify a Delhi NGO's work</h2>
    <ol>
      <li>
        Email the NGO and ask when and where their next drive is happening.
        Serious NGOs run something on the ground every week or two and are
        happy to have donors present.
      </li>
      <li>
        If you cannot attend in person, ask for the last three months of
        programme photographs with dates and locations.
      </li>
      <li>
        Ask for two or three unedited beneficiary quotes with contact
        permission. You will not need to actually call, but the fact that the
        NGO can share them is a signal.
      </li>
      <li>
        For CSR spending, ask specifically for the CSR-1 registration number,
        the 12A and 80G certificates, and the last completed year's audited
        financials.
      </li>
    </ol>

    <h2>Where to start if you have a defined budget</h2>
    <ul>
      <li>
        <strong>Under one lakh rupees.</strong> Fund a specific children's
        education drive or a clean air campaign in a named settlement. Ask the
        NGO for a costed proposal and treat the receipt as the deliverable.
      </li>
      <li>
        <strong>One to five lakh rupees.</strong> Fund a small physical
        intervention: a community water tank, an education kit for fifty
        children, or the entire annual cost of a specific campaign series.
      </li>
      <li>
        <strong>Above five lakh rupees.</strong> Consider funding a community
        water pump or an equivalent asset. The unit cost is bounded, the
        beneficiary count is countable, and the asset stays with the community
        rather than the NGO.
      </li>
    </ul>

    <h2>An honest note on where Nikhaar Foundation fits</h2>
    <p>
      Nikhaar Foundation is a small, Delhi-based NGO working on water
      conservation, clean air, and children's welfare in the city's underserved
      neighbourhoods. We are 12A, 80G, and CSR-1 registered (CSR00107287) so
      individual donations are eligible for Section 80G deduction and CSR
      spending is eligible under Section 135 of the Companies Act. Our
      programmes and past drives are on our{" "}
      <Link href="/our-work">our work</Link> page. If any of this is close to
      how you want to give, get in touch on info@nikhaarfoundation.org.
    </p>
  </>
);

const NgosInDelhiFaqs = [
  {
    q: "How many NGOs are there in Delhi?",
    a: "There are tens of thousands of registered NGOs in the National Capital Territory of Delhi across trusts, societies, and Section 8 companies. The number that are actively delivering on-the-ground programmes with published reports and current 12A and 80G registrations is much smaller. A short list of delivery-focused NGOs in any given programme area typically runs to a few dozen.",
  },
  {
    q: "How do I find a small NGO in Delhi to donate to?",
    a: "Start with the programme area you care about (water, education, children, environment), then look for organisations that name specific settlements or schools they work in. Verify their 12A and 80G registration on the Income Tax Department's e-filing portal, ask for audited financials from the last completed year, and if you can, attend a drive in person.",
  },
  {
    q: "Which are the best NGOs in Delhi for water conservation?",
    a: "The best NGOs in Delhi for water conservation are the ones that combine physical infrastructure with community-level campaigns, work in named settlements, and can produce photographs of their installations. Nikhaar Foundation is one such organisation, focused on community water pumps and awareness in Delhi's bastis. There are others across the city, and the criteria in this guide apply to all of them.",
  },
  {
    q: "Are Delhi NGOs eligible for CSR funding?",
    a: "Delhi NGOs that hold a valid CSR-1 registration with the Ministry of Corporate Affairs are eligible to receive corporate CSR funds under Section 135 of the Companies Act, 2013. The registration number typically looks like CSR00XXXXXX and can be verified on the MCA portal. Nikhaar Foundation's CSR-1 registration number is CSR00107287.",
  },
  {
    q: "Can I visit a Delhi NGO before donating?",
    a: "Yes, and a serious NGO will encourage it. Email in advance, ask for the next scheduled drive or installation, and offer to attend. In-person visits are the single fastest way to separate delivery-focused NGOs from paperwork-focused ones.",
  },
  {
    q: "What tax deduction do I get for donating to a Delhi NGO?",
    a: "You get the same 80G deduction as for any other Indian NGO with 80G registration. Most Delhi NGOs are in the 50 per cent deduction bucket, so half of the eligible donation reduces your taxable income. Total deduction is capped at ten per cent of your adjusted gross total income.",
  },
];

const CsrRulesArticle = () => (
  <>
    <p>
      Corporate Social Responsibility spending in India is governed by{" "}
      <strong>Section 135</strong> of the Companies Act, 2013 and the CSR Rules,
      2014 as amended. A qualifying company must spend at least two per cent of
      its average net profits from the three preceding financial years on
      activities listed in Schedule VII, must run this through a CSR committee
      of the board, must appoint a CSR-1 registered implementing agency where
      applicable, and must file an annual CSR-2 report with the Ministry of
      Corporate Affairs. Non-compliance carries monetary penalties.
    </p>
    <p>
      This guide is written for Company Secretaries, CFOs, and CSR heads who
      need a single reference for what is required, in what order, and what
      changed most recently. It covers applicability, computation, Schedule VII,
      implementation, reporting, and impact assessment.
    </p>

    <h2>Which companies must comply</h2>
    <p>
      A company falls under Section 135 if, in the immediately preceding
      financial year, it meets any one of these three thresholds:
    </p>
    <ul>
      <li>Net worth of five hundred crore rupees or more, or</li>
      <li>Turnover of one thousand crore rupees or more, or</li>
      <li>Net profit of five crore rupees or more.</li>
    </ul>
    <p>
      Once a company meets any of these thresholds, it must constitute a CSR
      committee, adopt a CSR policy, and spend at least two per cent of its
      average net profits from the three immediately preceding financial years
      on Schedule VII activities. A company that ceases to meet the thresholds
      for three consecutive financial years is no longer required to comply
      until it meets them again.
    </p>

    <h2>How the two per cent is calculated</h2>
    <p>
      The two per cent is calculated on the average net profit of the three
      immediately preceding financial years, computed under Section 198 of the
      Companies Act. Net profit under Section 198 is different from profit
      before tax; it excludes certain items and adds back others. The company's
      auditor or Company Secretary computes the CSR obligation each year based
      on the audited accounts.
    </p>
    <p>
      Any unspent portion at year end has to be handled per Section 135(5) and
      135(6):
    </p>
    <ul>
      <li>
        For ongoing projects, unspent amounts must be transferred within thirty
        days of the financial year end to a designated Unspent CSR Account and
        spent within three financial years.
      </li>
      <li>
        For amounts unspent that are not attributable to an ongoing project, the
        unspent portion must be transferred within six months of the financial
        year end to a Schedule VII fund such as the Prime Minister's National
        Relief Fund.
      </li>
    </ul>

    <h2>Schedule VII: what your CSR spending can fund</h2>
    <p>
      Schedule VII lists eleven activity clauses. Most CSR spending in India
      lands under these:
    </p>
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-line">
            <th className="py-3 pr-4 font-semibold text-ink">Clause</th>
            <th className="py-3 font-semibold text-ink">Activity</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          <tr>
            <td className="py-3 pr-4 font-medium text-ink">(i)</td>
            <td className="py-3">Eradicating hunger and poverty; healthcare, sanitation, and safe drinking water</td>
          </tr>
          <tr>
            <td className="py-3 pr-4 font-medium text-ink">(ii)</td>
            <td className="py-3">Promoting education, including special education and vocational skills</td>
          </tr>
          <tr>
            <td className="py-3 pr-4 font-medium text-ink">(iii)</td>
            <td className="py-3">Gender equality, women's empowerment, old age homes, and support for the differently abled</td>
          </tr>
          <tr>
            <td className="py-3 pr-4 font-medium text-ink">(iv)</td>
            <td className="py-3">Environmental sustainability, conservation of natural resources, quality of soil, air, and water</td>
          </tr>
          <tr>
            <td className="py-3 pr-4 font-medium text-ink">(v)</td>
            <td className="py-3">Protection of national heritage, art, and culture</td>
          </tr>
          <tr>
            <td className="py-3 pr-4 font-medium text-ink">(vi)</td>
            <td className="py-3">Measures for the benefit of armed forces veterans, war widows, and their dependents</td>
          </tr>
          <tr>
            <td className="py-3 pr-4 font-medium text-ink">(vii)</td>
            <td className="py-3">Training to promote rural sports, Paralympic and Olympic sports</td>
          </tr>
          <tr>
            <td className="py-3 pr-4 font-medium text-ink">(viii)</td>
            <td className="py-3">Contribution to specified government funds including the PM's National Relief Fund and PM CARES</td>
          </tr>
          <tr>
            <td className="py-3 pr-4 font-medium text-ink">(ix)</td>
            <td className="py-3">Contribution to incubators funded by the Central Government and to research in science and technology</td>
          </tr>
          <tr>
            <td className="py-3 pr-4 font-medium text-ink">(x)</td>
            <td className="py-3">Rural development projects</td>
          </tr>
          <tr>
            <td className="py-3 pr-4 font-medium text-ink">(xi)</td>
            <td className="py-3">Slum area development</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      A project that could arguably fit multiple clauses should be attributed to
      the single clause it best fits, with clear internal documentation. Split
      attribution is technically possible but tends to attract auditor
      attention.
    </p>

    <h2>How CSR spending is actually implemented</h2>
    <p>
      A company can execute its CSR spending in one of three ways:
    </p>
    <ol>
      <li>
        <strong>Directly by the company</strong>, treating the spending as its
        own project. This is unusual for anything below a certain scale.
      </li>
      <li>
        <strong>Through an implementing agency</strong>. This is the most common
        route. The implementing agency must be one of: a Section 8 company, a
        registered public trust, or a registered society; and it must hold
        valid 12A and 80G registrations and be CSR-1 registered with the
        Ministry of Corporate Affairs.
      </li>
      <li>
        <strong>Through a section 135 fund</strong> listed in Schedule VII (vii)
        or (viii). For example, contributing to the PM's National Relief Fund.
      </li>
    </ol>
    <p>
      For most companies, route two is the main choice. Read our companion
      guide on{" "}
      <Link href="/blog/csr-1-registration-section-135-explained">
        CSR-1 registration
      </Link>{" "}
      for a walk-through of the implementing agency route.
    </p>

    <h2>CSR committee requirements</h2>
    <p>
      A CSR committee of the board is required for any company falling under
      Section 135. The committee must have at least three directors, with at
      least one independent director. For companies not required to have
      independent directors, two directors are sufficient. The committee is
      responsible for:
    </p>
    <ul>
      <li>Formulating and recommending the CSR policy</li>
      <li>Recommending the amount of CSR spending each year</li>
      <li>Monitoring the implementation of the CSR policy</li>
      <li>Approving the impact assessment report where applicable</li>
    </ul>

    <h2>CSR-2 annual reporting to the MCA</h2>
    <p>
      Form CSR-2 is the annual CSR report every applicable company must file
      with the Ministry of Corporate Affairs. It carries details of the CSR
      committee, the CSR policy, the spending, the ongoing projects, the
      unspent amount, the implementing agencies, and the impact assessment
      status where applicable. The MCA has issued updated formats over the
      years; check the latest CSR-2 form on mca.gov.in before filing.
    </p>

    <h2>Impact assessment threshold</h2>
    <p>
      Companies with an average CSR obligation of ten crore rupees or more in
      the three immediately preceding financial years must conduct an impact
      assessment through an independent agency for CSR projects with outlays of
      one crore rupees or more and completed in the previous financial year.
      The impact assessment report is placed before the board and disclosed in
      the annual report on CSR.
    </p>
    <p>
      For companies below the ten crore threshold, impact assessment is not
      mandatory but is often taken up voluntarily for material projects, both
      for internal learning and for board reporting quality.
    </p>

    <h2>Penalties for non-compliance</h2>
    <p>
      Under Section 135(7), a company that fails to transfer unspent CSR
      amounts to the required fund or Unspent CSR Account is liable for a
      penalty of twice the unspent amount required to be transferred or one
      crore rupees, whichever is less. Every officer of the company in default
      is liable to a penalty of one-tenth of the unspent amount required to be
      transferred or two lakh rupees, whichever is less. Non-filing of CSR-2 or
      other related non-compliance carries its own penalties under the general
      provisions.
    </p>

    <h2>A short compliance checklist for your CSR cycle</h2>
    <ol>
      <li>Confirm applicability against the three Section 135 thresholds</li>
      <li>Compute the two per cent obligation on average net profits under Section 198</li>
      <li>Constitute or refresh the CSR committee</li>
      <li>Adopt or update the CSR policy in line with Schedule VII</li>
      <li>Identify projects and select implementing agencies with CSR-1 registration</li>
      <li>Sign scoped project MoUs and disburse in tranches with utilisation reporting</li>
      <li>Transfer unspent amounts within thirty days or six months as applicable</li>
      <li>Commission impact assessments for projects above the threshold</li>
      <li>File CSR-2 with the MCA</li>
      <li>Disclose in the annual report on CSR in the Board's Report</li>
    </ol>

    <h2>Where Nikhaar Foundation fits as an implementing agency</h2>
    <p>
      Nikhaar Foundation is CSR-1 registered under CSR00107287 with the
      Ministry of Corporate Affairs, and 12A and 80G registered under the
      Income Tax Act, 1961. Our programmes map to Schedule VII (i) safe
      drinking water, (ii) education, and (iv) environmental sustainability. If
      you would like a costed project proposal aligned to one of these Schedule
      VII clauses, plus the full documentation pack for your CSR committee,
      start on our <Link href="/csr">CSR partnerships page</Link>. If you would
      rather see what a delivered project looks like first, our{" "}
      <Link href="/impact">impact page</Link> covers the community water pump
      case study.
    </p>
  </>
);

const CsrRulesFaqs = [
  {
    q: "Which companies are required to comply with CSR rules in India?",
    a: "Any Indian company that meets any one of three thresholds in the immediately preceding financial year is required to comply: net worth of five hundred crore rupees or more, turnover of one thousand crore rupees or more, or net profit of five crore rupees or more. The obligation continues until the company fails to meet all three thresholds for three consecutive financial years.",
  },
  {
    q: "How is CSR spending calculated?",
    a: "The CSR obligation is two per cent of the average net profits of the three immediately preceding financial years, calculated under Section 198 of the Companies Act, 2013. Net profit under Section 198 is a specific formulation and is different from profit before tax; the company's auditor computes it against the audited accounts.",
  },
  {
    q: "What activities count as CSR under Schedule VII?",
    a: "Schedule VII of the Companies Act, 2013 lists eleven activity clauses covering areas including hunger and poverty eradication, education, gender equality, environmental sustainability, heritage conservation, armed forces welfare, sports, government funds, incubators, rural development, and slum area development.",
  },
  {
    q: "Can a company implement CSR directly or must it use an NGO?",
    a: "A company can implement CSR directly, through an implementing agency, or through Schedule VII specified funds. If it uses an implementing agency, that agency must be a registered public trust, society, or Section 8 company holding 12A and 80G under the Income Tax Act and CSR-1 registration with the Ministry of Corporate Affairs.",
  },
  {
    q: "What is Form CSR-2?",
    a: "Form CSR-2 is the annual CSR reporting form that every company subject to Section 135 must file with the Ministry of Corporate Affairs. It captures CSR committee composition, CSR policy details, spending, ongoing projects, unspent amounts, implementing agencies used, and impact assessment status where applicable.",
  },
  {
    q: "When is a CSR impact assessment mandatory?",
    a: "A CSR impact assessment through an independent agency is mandatory for companies with an average CSR obligation of ten crore rupees or more in the three preceding financial years, and only for individual projects with outlays of one crore rupees or more that were completed in the previous financial year. Below these thresholds, impact assessment is voluntary.",
  },
  {
    q: "What happens to unspent CSR funds?",
    a: "Unspent CSR funds attributable to an ongoing project must be transferred within thirty days of the financial year end to a designated Unspent CSR Account and spent within three financial years. Unspent funds not attributable to an ongoing project must be transferred within six months of the financial year end to a Schedule VII specified fund such as the PM's National Relief Fund.",
  },
  {
    q: "What is the penalty for CSR non-compliance?",
    a: "Under Section 135(7), a company that fails to transfer unspent CSR amounts as required is liable for a penalty of twice the unspent amount or one crore rupees, whichever is less. Each officer in default is liable for one-tenth of the unspent amount or two lakh rupees, whichever is less. Additional penalties apply for failure to file CSR-2 and other related non-compliance.",
  },
  {
    q: "Can CSR funds be spent outside India?",
    a: "As a general rule, CSR spending must benefit local areas and preferably the local area around which the company operates. CSR activities outside India are permitted only in a very narrow set of circumstances, such as training of Indian sportspersons representing any state or union territory at national level, or representing the country at international level.",
  },
  {
    q: "Is CSR spending tax deductible for the company?",
    a: "CSR spending is not generally allowed as a business expense under Section 37(1) of the Income Tax Act. However, contributions to certain Schedule VII entities may be eligible for a deduction under Section 80G subject to conditions. The specific tax treatment should be confirmed with the company's tax advisor for each transaction.",
  },
];

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
  {
    slug: "how-to-choose-trustworthy-ngo-india-donor-checklist",
    title: "How to choose a trustworthy NGO in India: a donor's checklist",
    description:
      "A verification checklist for individual and corporate donors on how to identify a trustworthy NGO in India: 12A, 80G, CSR-1, FCRA, audited financials, and where to cross verify each registration on the Income Tax Department and MCA portals.",
    excerpt:
      "A trustworthy Indian NGO holds valid 12A and 80G, discloses named beneficiaries, and issues digitally signed receipts fast. Here is how to verify each of those claims before any money moves.",
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    readingTime: "11 min read",
    category: "Donor guide",
    keywords: [
      "how to choose an NGO in India",
      "trustworthy NGO India",
      "verified NGO India",
      "safe NGOs to donate to India",
      "how to check if NGO is legitimate India",
      "best NGOs in India to donate",
      "12A 80G verification India",
      "top NGO India donor checklist",
    ],
    keyTakeaways: [
      "A trustworthy Indian NGO holds valid Section 12A and 80G registrations, and CSR-1 if it accepts corporate donations.",
      "Every 80G receipt must carry the sixteen digit Unique Registration Number issued after 2021.",
      "Cross verify 12A and 80G on incometax.gov.in and CSR-1 on mca.gov.in before donating.",
      "Cash donations above two thousand rupees are not eligible under Section 80G.",
      "Audited financials from the last completed financial year and reports with named locations are strong delivery signals.",
    ],
    faqs: HowToChooseNgoFaqs,
    body: <HowToChooseNgoArticle />,
  },
  {
    slug: "ngos-in-delhi-water-clean-air-children-welfare",
    title:
      "NGOs in Delhi working on water, clean air, and children's welfare: how to pick one to fund",
    description:
      "A guide for Delhi donors and CSR heads on the NGO landscape in Delhi, how to separate delivery-focused organisations from paperwork-focused ones, and where to start funding across water, clean air, and children's welfare programmes.",
    excerpt:
      "Delhi has thousands of registered NGOs. The ones doing visible on-the-ground work in water, air, and children's welfare are a much smaller list. Here is how to find them and where to start.",
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    readingTime: "9 min read",
    category: "Donor guide",
    keywords: [
      "NGOs in Delhi",
      "NGOs in Delhi list",
      "small NGOs in Delhi",
      "Delhi NGO to donate",
      "verified NGOs Delhi",
      "Delhi water NGO",
      "children welfare NGO Delhi",
      "clean air NGO Delhi",
      "best NGO in Delhi",
      "top NGOs in Delhi 2026",
    ],
    keyTakeaways: [
      "Delhi has one of the highest NGO densities in India, most of them small and neighbourhood specific.",
      "Water access, clean air, and children's welfare are the three areas where a small donation buys the most visible outcome.",
      "Delivery focused NGOs name settlements, publish real photographs, and reply to email within two working days.",
      "Under one lakh: fund a specific drive. One to five lakh: fund a bounded intervention. Above five lakh: fund a physical asset like a community water pump.",
      "Verify 12A, 80G, and CSR-1 on the Income Tax and MCA portals before transferring any amount.",
    ],
    faqs: NgosInDelhiFaqs,
    body: <NgosInDelhiArticle />,
  },
  {
    slug: "csr-rules-india-section-135-schedule-vii-csr-2-guide",
    title:
      "CSR rules in India: a Company Secretary's guide to Section 135, Schedule VII, and CSR-2",
    description:
      "A comprehensive Section 135 CSR compliance guide covering applicability thresholds, the two per cent calculation under Section 198, Schedule VII activity clauses, CSR-1 implementing agencies, CSR-2 annual reporting, impact assessment thresholds, and penalties for non-compliance.",
    excerpt:
      "Applicability, computation, Schedule VII activities, implementing agencies, CSR-2 reporting, and impact assessment. One reference for the full Section 135 compliance cycle.",
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    readingTime: "13 min read",
    category: "CSR partnerships",
    keywords: [
      "CSR rules in India",
      "Section 135 Companies Act",
      "CSR compliance India",
      "Schedule VII activities",
      "CSR-2 form filing",
      "CSR impact assessment",
      "unspent CSR account rules",
      "CSR committee requirements",
      "Company Secretary CSR guide",
      "MCA CSR-2 filing",
    ],
    keyTakeaways: [
      "Companies meeting any of three thresholds under Section 135 must spend at least two per cent of average net profits on Schedule VII activities.",
      "Implementing agencies must hold CSR-1 registration with the MCA and 12A plus 80G under the Income Tax Act.",
      "Schedule VII lists eleven activity clauses; most CSR spending lands under education, environment, health, and rural development.",
      "Unspent CSR funds must be transferred within thirty days (ongoing projects) or six months (other) as required by Section 135(6).",
      "Impact assessment is mandatory for companies with CSR obligation of ten crore or more, for projects with outlays of one crore or more.",
      "Form CSR-2 must be filed annually with the MCA in addition to disclosure in the Board's Report.",
    ],
    faqs: CsrRulesFaqs,
    body: <CsrRulesArticle />,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
