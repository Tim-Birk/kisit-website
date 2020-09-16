import PayrollIcon from "../images/payroll.svg"
import BillingIcon from "../images/billing.svg"
import SchedulingIcon from "../images/scheduling.svg"
import EVVIcon from "../images/evv.svg"
import CaseManagementIcon from "../images/caseManagement.svg"
import ComplianceIcon from "../images/compliance.svg"
import HumanResourcesIcon from "../images/humanResources.svg"
import ReportingIcon from "../images/reporting.svg"

const Solutions = [
  {
    slug: "/payroll",
    icon: PayrollIcon,
    title: "Payroll",
    description:
      "All the benefits of a complete payroll solution customized for the demands and nuances of Home Care",
    bulletPoints: [
      " Regular and overtime pay rates are applied based on contract, service code, service date and can even be specific to counties -- no manual entry or calculation of pay rates necessary",
      "Adjusts pay rates when necessary to comply with Living Wage and Wage Parity laws",
      "Automatically calculate Spread of Hours, Split Shift and Travel Time pay when necessary",
      "A rich set of reports out of the box including accurate payroll cost breakdowns needed to complete industry Cost Reports which determine reimbursement rates",
      "Conveniently import transactions directly from scheduling or from other third party applications",
      "Automate payroll for salaried employees",
    ],
  },
  {
    slug: "/billing",
    icon: BillingIcon,
    title: "Billing",
    description: "Reduce claim rejections and collect revenue faster than ever",
    bulletPoints: [
      "Flexible invoice configuration based on payer",
      "Up to date claim status information",
      "Pre-bill claims scrubbing to reduce denials and ensure compliant claims",
      "Electronic payment and adjustment posting down to the service line level",
      "Supports multiple billing rates as well as different calculation and rounding methods for each payer",
      "Robust accounts receivable reporting",
    ],
  },
  {
    slug: "/scheduling",
    icon: SchedulingIcon,
    title: "Scheduling",
    description:
      "Fill cases with the appropriate caregivers while taking into account authorization restrictions",
    bulletPoints: [
      "Developed to help coordinators work more efficiently and effectively",
      "View client/employee details, authorization information, employee schedule conflicts and availability all in a single view when setting up a schedule",
      "Validates schedule against authorization restrictions",
      "Warns and/or restricts users when scheduling potential overtime",
      "Algorithm for suggesting the most compatible employees for a given client based on language, location, type of service needed, pet, dietary and other environmental conditions",
      "Auto-Scheduling allows for quickly setting up schedules going forward",
    ],
  },
  {
    slug: "/evv",
    icon: EVVIcon,
    title: "EVV",
    description:
      "Electronic Visit Verification software in compliance with the 21st Century CURES Act requirements",
    bulletPoints: [
      "Developed to meet the requirements of the 21st Century CURES Act",
      "Real time interface provides assurance that field staff are where they are supposed to be, when they are supposed to be there",
      "EVV data streamlines into payroll and billing",
      "Supports consumer-directed cases without requiring a schedule to be set up",
      "Employee task tracking",
      "Multilingual call menu available",
    ],
  },
  {
    slug: "/case-management",
    icon: CaseManagementIcon,
    title: "Case Management",
    description:
      "Maintain clients, payers and authorizations all in one place to manage costs and provide quality care",
    bulletPoints: [
      "Manage payers and authorizations assigned to clients",
      "Authorizations are enforced across the entire platform, ensuring that services will not be rendered outside of what can be billed",
      "Keep track of notes and incidents that have been linked to the case all in one place",
      "Maintain a reliable admission and discharge history",
      "Track client referrals",
    ],
  },
  {
    slug: "/compliance",
    icon: ComplianceIcon,
    title: "Compliance",
    description:
      "Keep employees in compliance with Department of Health regulations and continually check to make sure they do not appear in any OIG exlusion lists and databases",
    bulletPoints: [
      "Developed to help providers maintain compliance consistent with the Department of Health 766 Regulations regarding the 'Minimum Standards for Licensed Home Care Services Agencies'",
      "Fully customizable for each provider",
      "Tracks pre-employment and annual requirements such as physicals, vaccinations, drug screens and background checks",
      "Receive alerts before employees potentially fall out of compliance due to unfulfilled inservice and other annual requirements",
    ],
  },
  {
    slug: "/human-resources",
    icon: HumanResourcesIcon,
    title: "Human Resources",
    description:
      "For businesses of all sizes, especially those without dedicated HR teams, who need to minimize risk and drive business success",
    bulletPoints: [
      "Assign industry-specifc disciplines to classify employees",
      "Manage employee credentials (licenses and certifications) more effectively and receive alerts to notify of upcoming expirations",
      "Assign scheduling criteria to an employee to determine better compatibility with clients when filling cases",
      "Keep track of notes and incidents linked to employees",
      "Keep track of employee scheduling availability, tardiness and time off requests",
    ],
  },
  {
    slug: "/reporting",
    icon: ReportingIcon,
    title: "Reporting",
    description:
      "Key metrics and analytics that give a full 360 degree view or your agency",
    bulletPoints: [
      "Audit-ready reports for every solution we offer, developed by industry-leading consultants who are experts in operational and financial management for Home Health Care providers",
      "Extremely accurate accounts receivable reporting",
      "Regulatory compliance reports",
      "PDF, excel friendly and other formats available",
      "Customized reports are always available and encouraged"
    ],
  },
]

export default Solutions
