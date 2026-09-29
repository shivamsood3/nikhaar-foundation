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

const PumpEconomicsArticle = () => (
  <>
    <p>
      Around 3,000 people in Indira Gandhi Camp, Kasturba Nagar, now have
      water at their doorstep because a community pump was installed inside
      the settlement. The intervention was not expensive. It was not
      technically complicated. It saves the average household in that lane
      roughly two hours a day and a few hundred rupees a month in tanker
      fees. It had simply never been anyone's job.
    </p>
    <p>
      This article is an attempt to open up the economics of a community
      water pump in enough detail to be useful. What it actually costs to put
      one in, what it changes for a household, what the per-beneficiary
      arithmetic looks like, why it is a better use of philanthropic capital
      than a subsidy or an awareness campaign, and what can go wrong. The
      numbers below are drawn from our own installation. They will vary in
      other settlements. The order of magnitude will not.
    </p>

    <h2>What a community water pump actually is</h2>
    <p>
      In an unplanned Delhi settlement, a community pump is usually a small
      electric submersible or a jet pump connected to a groundwater
      source or a municipal line where one is available at the boundary of
      the settlement. The pump sits inside the lane it serves, on a raised
      concrete plinth, protected from weather. It is connected to a shared
      tap point or, in the better cases, to a short distribution stub that
      feeds a handful of household connections a few metres away.
    </p>
    <p>
      Siting is the most consequential decision. The pump has to sit close
      enough to a household cluster that a five-year-old can reach it with a
      pitcher, but far enough from the nearest bore or leak-prone connection
      that it does not draw down a neighbour's supply. In practice, siting is
      a conversation with residents. The engineering is easier than the
      politics.
    </p>

    <h2>What the intervention actually costs</h2>
    <p>
      Rough breakdown of what a community pump installation in a Delhi camp
      looks like as a set of line items. Individual costs vary with local
      conditions, existing infrastructure, and negotiated rates. The
      structure of the spending does not.
    </p>
    <ul>
      <li>
        <strong>Site survey and community meetings.</strong> A trip or two to
        agree on the site, the households served, and the person or people
        who will hold operational responsibility after handover.
      </li>
      <li>
        <strong>Groundwater or connection assessment.</strong> Making sure the
        source can actually meet daily demand at peak times, and that the
        connection point is not going to create a dispute with an adjacent
        supply.
      </li>
      <li>
        <strong>Pump hardware.</strong> The pump itself, control panel,
        pressure switch, non-return valve, and cabling. This is the largest
        single line item.
      </li>
      <li>
        <strong>Plumbing.</strong> Pipe from source to pump, from pump to
        distribution point, tap fittings, and any short household connection
        stubs.
      </li>
      <li>
        <strong>Civil work.</strong> The plinth, a protective enclosure,
        drainage around the tap so the surrounding ground does not turn to
        mud.
      </li>
      <li>
        <strong>Electricity connection or metering.</strong> Where the pump
        cannot be run off a resident's existing connection, a dedicated
        supply arrangement.
      </li>
      <li>
        <strong>Installation labour.</strong> The plumber, the electrician,
        and someone on site to coordinate the day.
      </li>
      <li>
        <strong>Handover documentation.</strong> A written agreement with
        whoever holds operational responsibility, a spare parts list, and
        contact numbers for the plumber and the electrician.
      </li>
    </ul>
    <p>
      All of this together, for a pump serving somewhere between five hundred
      and three thousand people, comes to a figure most private donors would
      recognise as smaller than a mid-range annual charitable commitment. It
      is well within a modest CSR budget. It is inside a single small
      family's discretionary giving envelope.
    </p>

    <h2>What it saves each household</h2>
    <p>
      Three types of savings, each measurable.
    </p>
    <h3>Time</h3>
    <p>
      Before the pump, collecting water in Indira Gandhi Camp took most
      households between one and a half and two and a half hours a day,
      spread across two or three trips depending on family size and how
      early someone was willing to wake up. After the pump, the trip is a
      thirty-second walk to a tap that works. Assume, conservatively, two
      hours a day saved per household. Multiplied by six days a week, fifty
      weeks a year, that is six hundred hours per household per year. Across
      the six hundred households the pump serves, it is roughly 360,000
      person-hours a year of returned time.
    </p>
    <p>
      Most of that time went to women. A meaningful share went to older
      children who now stay in school through the morning.
    </p>
    <h3>Money</h3>
    <p>
      When municipal supply fails and there is no fixed alternative,
      households buy from private tankers. Delhi's tanker rates for a small
      household drum run into the low hundreds of rupees per delivery, with
      several deliveries a month on a bad month. A conservative estimate for
      the pump's monthly saving to an average household is one hundred and
      fifty to three hundred rupees. That is a few thousand rupees a year
      that stays in a household earning ten to twenty thousand rupees a
      month.
    </p>
    <h3>Health</h3>
    <p>
      Municipal water in Delhi is of variable quality. Tanker water is worse.
      A community pump drawing from a properly assessed source, with a clean
      tap, meaningfully reduces the incidence of waterborne illness in a
      household. This effect is real but we do not quantify it in our
      reporting because we did not measure it. It should be assumed to be a
      further gain on top of the time and money numbers.
    </p>

    <h2>Cost per beneficiary, honestly stated</h2>
    <p>
      The per-beneficiary cost of a community water pump depends on how you
      count. Three ways of thinking about it are useful.
    </p>
    <p>
      <strong>Capital cost per person served on day one.</strong> Take the
      installation cost and divide by the population served immediately. For
      a pump serving 3,000 people in Indira Gandhi Camp, this comes out to a
      low double-digit rupee figure per person, one-time.
    </p>
    <p>
      <strong>Amortised cost per person per year.</strong> Take the same
      capital cost, amortise over a conservative asset life of ten years,
      add an annual maintenance provision, and divide by the population. The
      per-person annual cost is a small single-digit rupee figure.
    </p>
    <p>
      <strong>Cost per hour of time returned.</strong> Take the amortised
      annual cost and divide by the total person-hours saved by the
      installation each year. The per-hour cost of returned time is a very
      small fraction of a rupee. This is the number that makes a community
      pump look uniquely good next to almost every other water intervention.
    </p>

    <h2>Why this beats a subsidy or an awareness campaign</h2>
    <p>
      Both subsidies and awareness campaigns have their place. Neither is a
      substitute for a physical asset at the point of use.
    </p>
    <p>
      A tanker subsidy immediately reduces household spending on water. The
      moment it ends, the queue and the fee return. From an impact per rupee
      perspective, a subsidy delivers relief only for the period it is
      funded. There is no residual asset.
    </p>
    <p>
      An awareness campaign changes what people know. In a settlement where
      the problem is not that residents fail to appreciate water's scarcity
      (they collect it by hand every morning) but that the tap is not in the
      right place, information is not the binding constraint. Awareness
      campaigns work well upstream, at the level of household appliance
      choice or industrial waste. In a basti, they land against a wall of
      lived experience.
    </p>
    <p>
      A community pump costs more upfront than an equivalent-year
      subsidy or campaign. It pays back in year one and continues paying back
      every year after that, as long as the maintenance stays honest.
    </p>

    <h2>The maintenance question</h2>
    <p>
      Most community water infrastructure that fails, fails at maintenance.
      A pump that runs for six years and then sits broken for another five
      is not a success. Two questions decide whether the asset lasts.
    </p>
    <p>
      <strong>Who runs it after handover.</strong> In our model, ownership
      transfers to the residents. A named individual or a small group holds
      the key to the enclosure, the spare parts, and the plumber's number.
      There is no ongoing role for the foundation.
    </p>
    <p>
      <strong>Where the money for repairs comes from.</strong> Households
      typically pool a small monthly contribution for electricity and minor
      repairs. Where the pump feeds household connections, the small
      contribution comes naturally. Where it feeds a shared tap, the
      collection needs a slightly more deliberate structure. Either way, it
      is a small amount at the household level and does not require external
      funding.
    </p>
    <p>
      A pump handed over well outlasts a pump maintained by the funder. The
      residents have a much better reason than we do to keep it running.
    </p>

    <h2>What can go wrong, and how we plan for it</h2>
    <ul>
      <li>
        <strong>Source dries up.</strong> Groundwater in some Delhi pockets
        is under stress. We site pumps only where the source has been
        assessed to sustain year-round demand.
      </li>
      <li>
        <strong>Dispute over usage.</strong> A new supply in a lane changes
        who has easy access to water and can create local politics. We
        insist on a public site meeting before installation and a written
        record of the households the pump is intended to serve.
      </li>
      <li>
        <strong>Pump fails outside warranty.</strong> A modest maintenance
        fund at the community level, plus a documented plumber and
        electrician, tends to keep small failures from becoming permanent.
      </li>
      <li>
        <strong>Ownership fights.</strong> Handover to a small named group
        rather than a single individual reduces the risk of the pump
        becoming private property.
      </li>
      <li>
        <strong>Electricity supply issues.</strong> We prefer pumps that can
        be run off a resident's existing meter with reimbursement rather
        than a dedicated line that becomes a bureaucratic dependency.
      </li>
    </ul>

    <h2>What this looks like at scale</h2>
    <p>
      One pump helps one lane. Delhi has hundreds of lanes with the same
      structural problem. There is no technical obstacle to installing
      dozens of pumps a year across Delhi's underserved settlements. The
      constraints are:
    </p>
    <ul>
      <li>
        Trusted survey capacity to site each pump correctly
      </li>
      <li>
        Relationships with the plumbers, electricians, and hardware
        suppliers who can execute reliably at modest cost
      </li>
      <li>
        Follow-through on handover documentation and community structure so
        each pump lasts a decade rather than a season
      </li>
      <li>
        Funding
      </li>
    </ul>
    <p>
      Of these four, the fourth is the one that responds directly to a
      donation. A committed annual budget in the low tens of lakhs, held
      over three years, turns into a step change in water access across the
      neighbourhoods we currently work in.
    </p>

    <h2>Why we lead with this programme</h2>
    <p>
      A community water pump is the clearest example of what we ask funders
      to buy. A defined problem in a named place. A physical fix. A
      countable set of people better off. An asset that stays with the
      community after we have gone. Reporting that says what happened, not
      what we hope will happen.
    </p>
    <p>
      If you would like to fund the next pump, or three pumps, or a year of
      pumps, our{" "}
      <Link href="/support#donate">support page</Link> has bank and UPI
      details for individual donors with 80G receipting, and our{" "}
      <Link href="/csr">CSR partnerships page</Link> has the full pack for a
      CSR committee. The wider case for physical water infrastructure in
      Delhi is in our post on{" "}
      <Link href="/blog/delhi-water-access-basti-community-pumps">
        Delhi's water access problem
      </Link>
      .
    </p>
  </>
);

const PumpEconomicsFaqs = [
  {
    q: "How much does it cost to install a community water pump in a Delhi settlement?",
    a: "A community water pump installation in a Delhi basti covers site survey, community meetings, source assessment, pump hardware, plumbing, civil work, electricity arrangements, installation labour, and handover documentation. In our own installations, the total for a pump serving several hundred to a few thousand people has been well within a modest CSR budget or a family-level annual charitable commitment. The largest single line item is usually the pump hardware itself.",
  },
  {
    q: "How many people can one community water pump serve?",
    a: "A single well-sited community water pump in a dense Delhi settlement can serve between five hundred and three thousand people. The number depends on source capacity, distribution length, peak demand, and whether the pump feeds a shared tap or short household connection stubs.",
  },
  {
    q: "Who maintains a community water pump after installation?",
    a: "In our model, ownership and operational responsibility transfer to the residents at handover. A named individual or small group holds the enclosure key, the spare parts, and the plumber's contact. Households typically pool a small monthly contribution for electricity and minor repairs. There is no ongoing role for the foundation.",
  },
  {
    q: "How long does a community water pump last?",
    a: "A well-installed community water pump with honest maintenance can last a decade or more. The main failure mode is not the hardware but the maintenance structure. Pumps handed over with a named operator, a documented plumber, and a small pooled maintenance fund typically outlast pumps that remain the funder's ongoing responsibility.",
  },
  {
    q: "Is a community water pump better than tanker subsidies for a Delhi settlement?",
    a: "Yes, by a large margin over a multi-year horizon. A tanker subsidy delivers relief only for the period it is funded, with no residual asset. A community water pump costs more upfront, pays back within a year in returned time and reduced tanker spending, and continues paying back every year after that, as long as the maintenance stays honest.",
  },
  {
    q: "Can a CSR committee fund a community water pump under Schedule VII?",
    a: "Yes. A community water pump installation maps cleanly to Schedule VII (i) of the Companies Act, 2013, which covers safe drinking water and sanitation. Nikhaar Foundation is CSR-1 registered under CSR00107287 and can supply the full documentation pack for your CSR committee.",
  },
];

const TwoHourWalkArticle = () => (
  <>
    <p>
      In Indira Gandhi Camp, in Kasturba Nagar, until the summer of last
      year, the first two hours of most weekdays belonged to water. Not to
      breakfast, not to school, not to the shift at the salon or the
      restaurant or the domestic job three lanes away. To water.
    </p>
    <p>
      It is easy to write about water access as a policy problem. It is
      harder to write about it as a time problem, which is what it is, in
      practice, for the household that lives inside it. This piece is the
      second of the two.
    </p>

    <h2>The three walks</h2>
    <p>
      In a dense Delhi settlement without reliable in-lane supply, water
      collection tends to fall into three patterns.
    </p>
    <p>
      <strong>The tanker queue.</strong> On days when a municipal or private
      tanker rolls in at a scheduled hour, the queue starts thirty minutes
      before. The women stand with drums. If the tanker arrives late, the
      queue extends into the school day and the workday. If the tanker
      arrives early, the household that missed the message misses the
      water.
    </p>
    <p>
      <strong>The distant tap.</strong> Where a working municipal tap exists
      but is not inside the lane, the walk to it and back with weight can
      take twenty to forty minutes each way. Three trips a day is common.
      The load is heavy enough that older children are recruited into the
      work as soon as they are able. Younger children come along because
      there is no one to leave them with.
    </p>
    <p>
      <strong>The paid delivery.</strong> Where the queue is untenable and
      the walk too long, households pay someone else to bring water. In a
      basti in central Delhi, a private drum delivered can cost more than a
      day's wage at the low end of the labour market. The households paying
      this are the ones with the least room to.
    </p>
    <p>
      Most households cycle between the three depending on the day, the
      time, the season, and how bad the summer is that week.
    </p>

    <h2>What two hours a day actually adds up to</h2>
    <p>
      Two hours a day sounds bearable in the abstract. Compounded, it is
      not.
    </p>
    <ul>
      <li>
        Two hours a day, six days a week, fifty weeks a year, is six hundred
        hours per household per year. About three and a half working weeks.
      </li>
      <li>
        Across a settlement of six hundred households, it is 360,000
        person-hours a year, most of them belonging to women. That is
        equivalent to the annual working time of about a hundred and eighty
        full-time workers.
      </li>
      <li>
        For a household earning ten thousand rupees a month at the informal
        wage rate for the primary earner, six hundred hours of returned
        time per year represents on the order of thirty to fifty thousand
        rupees of foregone earning capacity, or the equivalent household
        productivity, depending on how it is spent.
      </li>
    </ul>
    <p>
      These are not clever numbers. They are the arithmetic of two hours a
      day.
    </p>

    <h2>Who pays the time</h2>
    <p>
      Water collection in Delhi's bastis is almost entirely a women's job.
      In a settlement of a hundred households, ninety-five will have the
      task done by the eldest daughter or the mother. The father is at his
      workplace by six in the morning. The son goes to school. The
      grandmother, where she is present, does what she can. That leaves
      the woman running the household.
    </p>
    <p>
      The effect on her day is direct and unromantic. She wakes at
      four-thirty. She fetches water until six-thirty or seven. She then
      sends the children to school, cooks breakfast, cleans, and if she
      has an outside job, she leaves at half past eight or nine and returns
      at seven. The tail of her day is not shorter than it needs to be. It
      is exactly as long as it needs to be, plus water.
    </p>
    <p>
      When she has a daughter of school-going age, the daughter is asked to
      help. Some daughters are asked to help enough that they attend school
      inconsistently and eventually stop. The interaction between water and
      girls' education is present in almost every settlement of this kind.
    </p>

    <h2>The morning after a pump goes in</h2>
    <p>
      When a community pump is installed inside the lane and handed over to
      residents, the change is immediate. The queue does not shorten. It
      disappears. The trip that was two hours becomes thirty seconds.
    </p>
    <p>
      What happens with the returned time is not uniform. Some of it goes to
      the same household work that was there before, done more thoroughly.
      Some of it goes to work outside the home that the woman could not
      previously fit in her day. Some of it goes to the children whose
      education used to compete with the walk. Some of it goes to nothing
      in particular, which is fine. Rest is a valid use of returned time.
    </p>
    <p>
      The point is not that a pump makes anyone rich. The point is that a
      pump gives an entire lane back the first two hours of the day. Every
      day. Six days a week. Every year the pump stays in service. That is
      a much larger effect than the cost of the intervention would suggest.
    </p>

    <h2>Why this is worth paying attention to</h2>
    <p>
      Time-poverty in Delhi's bastis is not a well-covered story. Water is
      a household problem. Household problems, in this country and most
      others, do not get the attention that supply-side infrastructure
      problems get. The tanker system is regulated, the pipe network is
      contested, the borewell debate is live. The two-hour queue at the
      end of them is not on any front page.
    </p>
    <p>
      If you are a donor who thinks in terms of returns on capital, time
      returned to women in Delhi's bastis is one of the highest-return uses
      of philanthropic money we are aware of. Not because women's time is
      undervalued in some abstract way, though it is. Because the physical
      cost of returning the time is very low, and it stays returned for
      years.
    </p>

    <h2>How to help</h2>
    <p>
      Nikhaar Foundation funds and installs community water pumps in
      Delhi's underserved settlements and hands them to residents. If you
      want to fund the next pump or contribute more broadly, our{" "}
      <Link href="/support#donate">donate page</Link> has the bank and UPI
      details, and our{" "}
      <Link href="/blog/economics-of-a-community-water-pump-delhi-basti">
        long-form piece on the economics of a community pump
      </Link>{" "}
      has the numbers in more detail. For companies routing Section 135 CSR
      spending, our <Link href="/csr">CSR partnerships page</Link> covers
      the Schedule VII mapping and the documentation pack.
    </p>
  </>
);

const TwoHourWalkFaqs = [
  {
    q: "How much time do women in Delhi's bastis spend collecting water each day?",
    a: "In Delhi's underserved settlements without reliable in-lane water supply, women typically spend between one and a half and two and a half hours a day collecting water, spread across two or three trips. This is the pattern in places like Indira Gandhi Camp in Kasturba Nagar before a community water pump was installed.",
  },
  {
    q: "Why does water collection fall on women in Delhi's settlements?",
    a: "Household water collection in Delhi's bastis is largely a women's job because male members of the household typically leave for outside work early and children are in school or too young to carry the load. The primary earner cannot fetch water in the morning. The task falls to the woman running the household, often with help from the eldest daughter, which affects her school attendance.",
  },
  {
    q: "What does a community water pump change for a Delhi basti?",
    a: "A community water pump installed inside a settlement and handed over to residents eliminates the daily water collection walk. A two hour task becomes a thirty second one. The returned time redistributes across additional household work, outside employment for women who could not previously fit it in, more consistent school attendance for older daughters, and rest.",
  },
  {
    q: "How does water access affect girls' education in Delhi?",
    a: "In Delhi's underserved settlements, older daughters are frequently recruited into the daily water collection walk, which affects their school attendance. Consistent absence tends to compound into disengagement and eventually withdrawal from school. Interventions that remove the walk, such as a community water pump inside the lane, have a direct and measurable effect on girls' school attendance in that lane.",
  },
  {
    q: "How much money does a household in a Delhi basti spend on water?",
    a: "A household in a Delhi basti without reliable municipal supply typically spends between one hundred and fifty and three hundred rupees a month on private tanker deliveries, more in the summer. Households earning ten to twenty thousand rupees a month feel this as a meaningful proportion of discretionary spending. A community water pump inside the lane eliminates most of this.",
  },
];

const GiveBetterArticle = () => (
  <>
    <p>
      For most donors, giving well is not primarily a question of how much.
      It is a question of how. The same annual amount, arranged well, does
      several times the good it does when arranged carelessly. This is a
      practical guide, aimed at donors who already give and want to give
      better, on the choices that actually compound.
    </p>
    <p>
      It is not a fundraising piece. Every point below is one we would give
      you if you were considering giving to another organisation entirely.
    </p>

    <h2>Choose the intervention type before you choose the organisation</h2>
    <p>
      Charitable giving in India runs on three broad types of intervention.
      They behave differently in ways worth thinking about before you
      commit money to any organisation.
    </p>
    <p>
      <strong>Physical assets.</strong> A pump, a classroom, a solar panel,
      a piece of medical equipment. Assets have a defined unit cost, a
      countable beneficiary set, and a residual value that lasts after the
      donation is spent. They are easiest to explain to a family member or
      a CSR committee. They are what your money literally buys.
    </p>
    <p>
      <strong>Programmes.</strong> A year of after-school tutoring, a
      season of health camps, a running clean air campaign. Programmes do
      not leave a residual asset. They deliver a service for a period of
      time. They tend to be higher impact per rupee where the underlying
      problem is behavioural or informational rather than physical.
    </p>
    <p>
      <strong>Unrestricted funding.</strong> Money the organisation gets to
      spend where it needs it most. This is the single most useful thing you
      can give a well-run NGO. It is also the hardest to justify to a CSR
      committee or a family member who wants to see the receipt.
    </p>
    <p>
      Serious donors tend to use all three, in proportion. A common pattern
      that works: one large restricted asset-level gift a year for the
      story, a multi-year programme grant for the impact, and a
      smaller unrestricted contribution for the organisation's ability to
      operate.
    </p>

    <h2>Recurring beats one-time, and it is not close</h2>
    <p>
      A ten-thousand-rupee one-time donation is a ten-thousand-rupee
      one-time donation. A thousand rupees a month over ten years is a
      hundred and twenty thousand rupees of committed capital that the
      NGO can plan against. The second is worth more than twelve times the
      first, not just twelve times, because it lets the organisation take
      commitments it could not otherwise take.
    </p>
    <p>
      Recurring donations do three specific things:
    </p>
    <ul>
      <li>
        They let the NGO commit to multi-year work with the community. A
        two-year education programme cannot be run on an annual fundraising
        cycle.
      </li>
      <li>
        They reduce the fundraising overhead. Every one-time donor has to
        be sold to again next year. A recurring donor has already decided.
      </li>
      <li>
        They lower the psychological cost of giving. A thousand rupees a
        month is a background line item. Ten thousand once a year feels
        like a decision.
      </li>
    </ul>
    <p>
      Set up a UPI mandate or a bank standing instruction and forget about
      it. Review annually, adjust in line with your income, ask the NGO for
      an annual update.
    </p>

    <h2>Concentrated giving is more useful than spread giving</h2>
    <p>
      There is a real temptation to give small amounts to many
      organisations. It feels balanced. It also produces the smallest
      possible impact per rupee.
    </p>
    <p>
      The reason concentration works is not that any single NGO deserves
      the money more than another. It is that most of what makes
      philanthropic capital valuable, beyond the money itself, is
      relational. A donor who gives one lakh a year to one NGO is a person
      the NGO can call for help with an unusual problem, a referral to
      another donor, or a warm introduction to a CSR team. A donor who
      gives five thousand rupees to twenty NGOs is not that person to any
      of them.
    </p>
    <p>
      If you cannot bring yourself to concentrate on one organisation,
      three is a reasonable maximum. Fund each one meaningfully. Meet the
      people running each one. Read what each one publishes.
    </p>

    <h2>Multi-year commitments are worth more than they cost you</h2>
    <p>
      A five-year commitment at the same annual level as a single-year
      donation is worth more than five times the single-year gift, for
      almost exactly the same reason recurring is worth more than one-time.
      It lets the NGO plan.
    </p>
    <p>
      NGOs in India rarely ask for multi-year commitments because donors
      rarely offer them. If you are in a position to offer one, say so
      explicitly. You will get a materially better version of the
      partnership: better reporting, more access, an actual working
      relationship rather than a transactional one.
    </p>

    <h2>Memorial and legacy giving in India</h2>
    <p>
      A meaningful share of large charitable giving in India is triggered
      by loss. Memorial giving in the name of a parent, a spouse, or a
      close friend, is common. It works well when it is structured as a
      named contribution to a specific programme rather than as a one-time
      general donation.
    </p>
    <p>
      A named contribution can be small or large. The size matters less
      than the structure. A hundred thousand rupees given as "in memory of
      my mother" toward the annual running of a specific children's
      welfare drive gives you and your family a place to return to, a set
      of people who know your family's name, and a real relationship with
      the work. A hundred thousand rupees given as a one-time general
      donation with no naming and no follow-up disappears into the
      organisation's general ledger.
    </p>
    <p>
      Legacy giving, meaning giving arranged through a will, is
      structurally similar. Talk to the NGO before you write the
      arrangement into your will. Most Indian NGOs have never processed
      one and will need to build the internal capacity.
    </p>

    <h2>Family giving needs a small structure</h2>
    <p>
      Households that give more than a token amount typically benefit from
      a small internal system. Nothing formal. A conversation once a year,
      usually near the end of the financial year for tax reasons, about
      what the family gave in the last twelve months, what worked, and
      what to do next year.
    </p>
    <p>
      Households that treat giving as a shared decision tend to give more
      and to give better. Both children and older parents tend to be
      considerably more engaged when they have a voice in where the money
      goes, and considerably more likely to give themselves when they are
      older. This is an underrated form of intergenerational wealth
      transfer.
    </p>

    <h2>Corporate matching is uncommon in India but worth asking about</h2>
    <p>
      Payroll matching, where an employer matches an employee's charitable
      donation up to a limit, is the standard in most large economies. In
      India it is uncommon. It is not, however, unheard of.
    </p>
    <p>
      If you work at a listed Indian company or the Indian subsidiary of a
      global company, it is worth asking your HR team or finance team
      whether such a programme exists or could be created. The answer is
      often yes when someone bothers to ask. A matched donation doubles
      your effective annual gift at no additional cost to you.
    </p>
    <p>
      If you sit on a CSR committee, this is also worth raising there. A
      well-designed payroll matching programme can be structured to count
      toward CSR spending under Section 135 subject to the usual
      compliance conditions.
    </p>

    <h2>Ask the hard questions before you scale up</h2>
    <p>
      Before you take a giving relationship from a one-year small gift to
      a multi-year larger commitment, ask the organisation:
    </p>
    <ul>
      <li>
        What are the last three things that did not work, and what did you
        change as a result
      </li>
      <li>
        How would you spend an unrestricted commitment that was ten times
        our current annual gift
      </li>
      <li>
        Where do you spend the most on things that are not directly
        beneficiary-facing, and why
      </li>
      <li>
        Who would you compare yourselves to in this space, and what makes
        you different
      </li>
      <li>
        Who is your longest-standing donor and can we talk to them
      </li>
    </ul>
    <p>
      The answers themselves matter less than the presence of an answer.
      A serious NGO will have thought about each of these. An unserious
      NGO will not.
    </p>

    <h2>Red flags when scaling up</h2>
    <ul>
      <li>
        Reluctance to discuss overhead or administrative costs
      </li>
      <li>
        Programme photographs that repeat across the last three years
      </li>
      <li>
        Beneficiary numbers that grow linearly year over year without
        explanation
      </li>
      <li>
        A finance team that struggles to send audited financials in a
        timely way
      </li>
      <li>
        Pressure to commit at a particular calendar moment rather than on
        your timeline
      </li>
      <li>
        Founder or director involvement in decisions that should be
        handled by staff, or the reverse
      </li>
    </ul>

    <h2>Where to start if you have not given seriously before</h2>
    <p>
      Pick one programme area you care about. Pick one organisation in
      that area that clears the trust checklist in our post on{" "}
      <Link href="/blog/how-to-choose-trustworthy-ngo-india-donor-checklist">
        how to choose a trustworthy NGO in India
      </Link>
      . Give a bounded amount for a bounded outcome that you can point at
      afterwards. Meet the people running it. Read what they publish. If
      the experience is what you hoped, scale up next year. If not, move.
    </p>
    <p>
      If you would like to explore giving to Nikhaar Foundation
      specifically, our{" "}
      <Link href="/support#donate">support page</Link> has account and UPI
      details for individual donors, our{" "}
      <Link href="/csr">CSR partnerships page</Link> covers Section 135
      spending, and our <Link href="/impact">impact page</Link> shows what
      a delivered piece of work looks like from our side.
    </p>
  </>
);

const GiveBetterFaqs = [
  {
    q: "What is the most effective way to give to an NGO in India?",
    a: "The most effective giving to an Indian NGO is usually recurring rather than one-time, concentrated in a small number of organisations rather than spread thinly, and offered on a multi-year basis where possible. Physical asset contributions, ongoing programme funding, and unrestricted grants each serve different purposes and a balanced donor uses all three.",
  },
  {
    q: "Should I set up a monthly donation to an NGO or give a lump sum once a year?",
    a: "A monthly recurring donation is materially more useful to a well-run NGO than an equivalent lump sum given once a year. Recurring donations let the organisation plan and commit to multi-year work with the community, reduce fundraising overhead, and remove the annual decision-making cost for the donor. For most donors, the psychological cost of giving is also lower when it is a monthly line item.",
  },
  {
    q: "Is it better to give a small amount to many NGOs or a larger amount to one?",
    a: "Concentrating giving in one or a small number of organisations produces higher impact per rupee than spreading it thinly. Beyond the money itself, most of what makes a donor relationship valuable is relational, and only concentrated giving builds that. Three organisations is a reasonable maximum for most private donors.",
  },
  {
    q: "How do I set up a memorial donation in India?",
    a: "A memorial donation in India works best when structured as a named contribution to a specific programme rather than as a general one-time donation. Talk to the NGO first and agree on the naming convention, the programme, and the reporting cadence. Memorial giving of any size benefits from this structure. Legacy giving through a will should be discussed with the NGO in advance so they can build the internal processes.",
  },
  {
    q: "Does my employer match charitable donations in India?",
    a: "Payroll matching, where an employer matches an employee's charitable donation, is not the norm in India but exists at some listed Indian companies and Indian subsidiaries of global companies. Ask your HR or finance team directly, and if you sit on a CSR committee it is worth raising there. A well-designed matching programme can double your effective annual gift at no additional cost to you.",
  },
  {
    q: "What questions should I ask an NGO before making a larger donation?",
    a: "Ask about the last three things that did not work and what changed as a result, how they would spend a ten-times-larger unrestricted commitment, where they spend the most on things not directly beneficiary-facing, who they compare themselves to in the sector, and whether you can talk to their longest-standing donor. The answers themselves matter less than the fact that a serious organisation will have considered each of these questions.",
  },
  {
    q: "Are recurring donations to an Indian NGO eligible for 80G tax deduction?",
    a: "Yes. Recurring donations to a 12A and 80G registered Indian NGO are eligible for Section 80G deduction on the same basis as one-time donations. The NGO issues receipts on the cadence you set, typically monthly or quarterly, or a consolidated annual receipt at year end. Each receipt carries the sixteen digit 80G URN.",
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
  {
    slug: "economics-of-a-community-water-pump-delhi-basti",
    title:
      "The economics of a community water pump: what actually happens to a lane once the queue disappears",
    description:
      "A detailed breakdown of the cost, per-beneficiary economics, and long-term impact of installing a community water pump in a Delhi basti, drawn from the Indira Gandhi Camp case study. Covers hardware, plumbing, siting, maintenance, and why it beats subsidies and awareness campaigns.",
    excerpt:
      "What a community water pump in a Delhi settlement actually costs, what it saves each household in time and money, and why it is the highest leverage philanthropic asset in urban India.",
    datePublished: "2026-09-29",
    dateModified: "2026-09-29",
    readingTime: "12 min read",
    category: "Programmes",
    keywords: [
      "community water pump cost India",
      "cost of water pump Delhi basti",
      "NGO cost per beneficiary",
      "urban water infrastructure India",
      "water pump donation India",
      "Delhi settlement water",
      "community water infrastructure India",
      "Indira Gandhi Camp Kasturba Nagar",
      "high leverage philanthropy India",
    ],
    keyTakeaways: [
      "A community water pump in a Delhi settlement pays back in returned household time within the first year and continues to pay back annually across a ten year asset life.",
      "The three cost lenses that matter are one-time capital per person, amortised annual cost per person, and cost per hour of returned household time.",
      "Handover to residents with a named operator, a documented plumber, and a small pooled maintenance fund is what makes the asset last a decade rather than a season.",
      "Tanker subsidies and awareness campaigns have their place; neither is a substitute for a physical asset at the point of use.",
      "A committed annual budget in the low tens of lakhs, held over three years, can produce a step change in water access across Delhi's underserved settlements.",
    ],
    faqs: PumpEconomicsFaqs,
    body: <PumpEconomicsArticle />,
  },
  {
    slug: "two-hour-water-walk-women-time-poverty-delhi",
    title:
      "The two hour water walk: what women in Delhi's bastis pay in time before they earn anything",
    description:
      "A narrative account of the daily water collection burden borne by women in Delhi's underserved settlements, the cascading effect on girls' schooling and household income, and what a community water pump changes when it goes in.",
    excerpt:
      "Two hours a day, six days a week, 360,000 person-hours a year in a single settlement. What water collection actually costs women in Delhi's bastis, and what a community pump returns to them.",
    datePublished: "2026-09-29",
    dateModified: "2026-09-29",
    readingTime: "8 min read",
    category: "Programmes",
    keywords: [
      "women water Delhi",
      "time poverty women India",
      "water burden women",
      "Delhi women water collection",
      "girls education water access",
      "urban poverty Delhi women",
      "water women's welfare NGO Delhi",
      "gender water Delhi",
      "domestic water burden India",
    ],
    keyTakeaways: [
      "In Delhi's bastis without in-lane water supply, women spend between 1.5 and 2.5 hours a day collecting water.",
      "The load falls almost entirely on women and older daughters, with a direct effect on school attendance.",
      "Across a single settlement of 600 households, that is roughly 360,000 person-hours a year of foregone time.",
      "A community water pump inside the lane eliminates the collection walk. Two hours become thirty seconds.",
      "Returned time redistributes across outside employment, more consistent schooling for daughters, and unpaid household work done more thoroughly.",
    ],
    faqs: TwoHourWalkFaqs,
    body: <TwoHourWalkArticle />,
  },
  {
    slug: "how-to-give-better-india-serious-donor-guide",
    title:
      "How to give better in India: a serious donor's guide to compounding your impact",
    description:
      "A practical guide for individual and family donors on how to structure charitable giving in India for higher impact. Covers restricted vs unrestricted giving, recurring vs one-time, concentrated vs spread, multi-year commitments, memorial and legacy giving, and family giving structures.",
    excerpt:
      "For most donors, giving well is not primarily a question of how much. It is a question of how. Here are the arrangements that compound.",
    datePublished: "2026-09-29",
    dateModified: "2026-09-29",
    readingTime: "13 min read",
    category: "Donor guide",
    keywords: [
      "how to give better India",
      "strategic philanthropy India",
      "how to donate more effectively India",
      "recurring donation NGO India",
      "memorial donation NGO India",
      "legacy giving India",
      "family giving India",
      "high impact philanthropy India",
      "multi-year donation NGO",
      "restricted vs unrestricted grants India",
    ],
    keyTakeaways: [
      "Choose the intervention type before you choose the organisation: physical assets, programmes, and unrestricted funding each serve different purposes.",
      "Recurring donations are materially more valuable than one-time gifts of the same annual total because they let the NGO plan and commit.",
      "Concentrated giving to one or two organisations produces higher impact per rupee than the same amount spread across many.",
      "Multi-year commitments are worth more than they cost you, because they let the NGO commit to work that would not otherwise be viable.",
      "Memorial and legacy giving works best when structured as a named contribution to a specific programme rather than as a general donation.",
      "Ask hard questions before scaling up. A serious NGO will have thought about each of them.",
    ],
    faqs: GiveBetterFaqs,
    body: <GiveBetterArticle />,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
