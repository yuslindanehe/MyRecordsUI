<template>
  <div style="width: 100%; max-width: 700px; padding: 15px; margin: auto;">
    <h3> Term and Conditions</h3>
    <p>
      Please read the following information carefully. Your continued use of this site will indicate your agreement to
      be bound by the terms and conditions set forth below. If you do not agree to be bound by these term and
      conditions, promptly exit this site.
    </p>
    <ol>
      <li>
        Privacy
        <ul class="list-unstyled">
          <li>
            Your privacy is of the most importance to us. Health care providers will use credential medical
            information in order to provide you with health cares services. Health care providers will, at all times,
            maintain your confidential medical information in strict confidence and will not disclose any information
            regarding you to any unaffiliated third party unless you authorize that person to receive your information
            or the information is permitted to be disclosed by law, Please review Privacy of Information About Your
            Health for a through description of how we gather, use and protect your confidential medical information.
            All messages sent and receive within MyRecords that contain protected health information (PHI) are subject
            to all state and federal laws governing the security and confidentially of medical records.
          </li>
          <br>
        </ul>
      </li><li> MyRecords Features</li>
      <ul>
        <li>Electronic Messaging</li>
        <ul class="list-unstyled">
          <li>
            Myrecords should never be used for emergencies or urgent matters. The anticipated turnaround time for
            responses to electronic messages is 1-3 business days. All urgent medical matters should be reported
            immediately to your physician’s office by phone, or by going to an emergency room or dialing 911. Please
            note that messages you send through Myrecords may be viewed by other health professionals and other who work
            with your physician
          </li>
        </ul>
        <li>Secure Communications</li>
        <ul class="list-unstyled">
          <li>
            All communications between you and health care providers using MyRecords occur over a secure connection.
            You will receive Internet email messages notifying you
          </li>
        </ul>
        <li>Access Code</li>
        <ul class="list-unstyled">
          <li>
            When you initially enroll in MyRecords, you will be provided with a temporary access code. When you first
            access MyRecords, you will be prompted to create a personal user name and a password. Once the initial access
            code has been used it will no longer valid. It is extremely that you keep your user name and password
            completely confidential. Anyone with access to your login name and password will be able to read your messages
            and send new messages as if they were you. It is your responsibility to prevent disclosure of your user name
            and password, and to change your password if you feel that your security has been compromised. You may change
            your password any time.
          </li>
        </ul>
        <li>Minor Eligibility</li>
        <ul class="list-unstyled">
          <li>
            Minor children between the ages of 12 and 17 (inclusive) will not be eligible to participate in MyResults
            services unless emancipated. <br>
            A parent or legal guardian of a minor child up to the child's 12th birthday may request proxy access to
            their child's MyResults account by completing a Proxy Access Form. Under State and Federal law there are
            certain types of medical information that the parent or guardian of a minor patient age 12 or older may
            not view without the consent of the minor patient. Because of these requirements, we will not offer
            MyResults proxy access to parents of minor patients after his or her 12th birthday.
          </li>
        </ul>
        <li>Proxy Access</li>
        <ul class="list-unstyled">
          <li>
            Individuals 18 years of age or older may request proxy access to another individual's MyResults account
            only to the extent that the party requesting proxy access can demonstrate the legal right to the account
            holder's medical information. Access can be requested by completing the Proxy Access Form and submitting
            it to hospitals needed. Only one person will be granted proxy access to a MyResults account. A MyResults
            account will be activated for both the proxy and the account holder. If the proxy's legal relationship
            with the account holder changes, the proxy must immediately cease access and notify hospitals related by
            calling the clinic directly.
          </li>
        </ul>
      </ul>
      <br>
      <li>Information Does Not Constitute Medical Advice</li>
      <ul class="list-unstyled">
        <li>
          Health care providers assume no responsibility for how you use the information you obtain from this site.
          You should consult with a physician or other health care provider regarding your own condition and how this
          site content may or may not apply to you. <br>
          You may be accessing your own medical information via this site and may wish to communicate with one of your
          health care providers about that or related information. If you have an emergency, or think you need to speak
          to someone urgently, DO NOT use the email communication options provided to you by MyResults. Neither
          MyResults nor any other application available through this site is a substitute for appropriate and timely
          contact with your physician. This site is not a substitute for consultation with your physician. You should
          never change or stop any course of treatment prescribed by your physician without first consulting the
          physician.
        </li>
      </ul> <br>
      <li>Termination of Access</li>
      <ul class="list-unstyled">
        <li>
          MyResults as a convenience to the patient. Access to MyResults should not to be considered a right. At its
          sole discretion, Health providers may restrict or terminate access to MyResults at any time or for any reason.
        </li>
      </ul> <br>
      <li>Restrictions on Use and Ownership</li>
      <ul class="list-unstyled">
        <li>
          All pages within this site and any material made available for download are the property of health care
          providers and/or its subsidiaries and affiliates. The content on the site is provided for health care
          providers and its patients only. Nothing on this site should be construed as granting any license or right
          to use any trademark, service mark, or logo displayed on this site without the express permission of health
          care providers or the third party that may own the trademark, service mark, or logo.
        </li>
      </ul> <br>
      <li>Appropriate Use</li>
      <ul class="list-unstyled">
        <li>
          Access to the MyResults System is a convenience granted to users for the purpose furthering their medical
          care. Improper use of the system unrelated to this activity may result in suspension or termination from
          MyResults at the sole discretion of the host sites. Improper activities include, but are not limited to: <br>

          Inappropriate or abusive language. <br>
          Reserving appointment times that are not needed or are frequently cancelled.<br>
          Activities that are deemed disruptive to clinic operations.
        </li>
      </ul>
    </ol> <br>
    <nuxt-link to="/AdditionalSecurityVerification">
    <button type="button" class="btn btn-success"
            style = "width: 100%; max-width: 250px; padding: 12px; margin: auto;">ACCEPT</button>
    </nuxt-link>
    <nuxt-link to="/UserClickCancel">
    <button type="button" class="btn btn-danger"
            style = "width: 100%; max-width: 250px; padding: 12px; margin: auto;">DECLINE</button>
    </nuxt-link>

  </div>
</template>
<script>
export default {
  layout: 'preLogin'
}
</script>
