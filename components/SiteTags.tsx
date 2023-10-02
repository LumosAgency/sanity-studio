// components/DividerText.tsx
import React from 'react'

const DividerText: React.FC = () => {
  return (
    <div
      style={{
        padding: '2em',
        fontStyle: 'italic',
        color: '#999',
        border: 'none',
        width: '100%',
      }}
    >
      These are a list of dynamic tags to use in forms. Example: If you wanted to show &ldquo;Hello,
      John Doe&rdquo; you would use the following: &ldquo;Hello, &#123;&#123;firstName&#125;&#125;
      &#123;&#123;lastName&#125;&#125;&rdquo;
      <br />
      <br />
      <ul>
        <li>First Name: &#123;&#123;firstName&#125;&#125;</li>
        <li>Last Name: &#123;&#123;lastName&#125;&#125;</li>
        <li>Bill Amount: &#123;&#123;formattedMonthlyBill&#125;&#125;</li>
        <li>KW Range: &#123;&#123;rangeLow&#125;&#125; - &#123;&#123;rangeHigh&#125;&#125;</li>
        <li>Utility Provider: &#123;&#123;utility&#125;&#125;</li>
      </ul>
      Email:
    </div>
  )
}

export default DividerText
