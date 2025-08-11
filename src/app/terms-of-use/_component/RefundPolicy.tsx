"use client";

import { useGeneralSettings } from "@src/components/lib/woocommerce";
import React from "react";

const RefundPolicy = () => {
  const { data: generalSettings, isLoading, isError } = useGeneralSettings();
  const GeneralSettings: WooCommerceSetting[] = generalSettings;

  return (
    <div id="refundPolicy" className="text-[#667085]">
      <h3 className="font-semibold text-sm md:text-base xl:text-lg mb-2">
        REFUND POLICY - CCI ADVANCED PLUMBING TECH & TECHNICAL COMPANY
      </h3>
      <p className="text-xs md:text-sm xl:text-base mb-4">
        Effective Date: {new Date().toLocaleDateString("en-GB")}
      </p>

      <p className="text-xs md:text-sm xl:text-base mb-4">
        At CCI Advanced Plumbing Tech and Technical Company Ltd, we are
        committed to delivering exceptional plumbing services, quality
        equipment, and comprehensive training programs that meet professional
        standards and exceed customer expectations. Our refund policy ensures
        fair treatment while maintaining service quality.
      </p>

      <ul className="list-disc pl-5 space-y-3 leading-[1.8] text-xs md:text-sm xl:text-base">
        <li>
          <span className="font-medium">1. Plumbing Services Refunds</span>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>
              Full refund if work fails to meet professional plumbing standards
            </li>
            <li>
              Prorated refunds for incomplete work due to our inability to
              proceed
            </li>
            <li>
              No-cost remedial work for any defects within 12-month warranty
              period
            </li>
            <li>
              Emergency service refunds if response time exceeds guaranteed
              timeframe
            </li>
            <li>
              Client-initiated cancellations subject to materials purchased and
              work completed
            </li>
          </ul>
        </li>

        <li>
          <span className="font-medium">2. Equipment & Tools Refunds</span>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>
              30-day return policy for unused equipment in original packaging
            </li>
            <li>
              Full refund for defective or damaged equipment upon delivery
            </li>
            <li>
              Manufacturer warranty claims processed at no charge to customer
            </li>
            <li>
              Trade-in credit available for equipment upgrades within 90 days
            </li>
            <li>Custom or special-order items refundable only if defective</li>
          </ul>
        </li>

        <li>
          <span className="font-medium">3. Training Program Refunds</span>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Full refund if training cancelled by CCI Advanced Plumbing</li>
            <li>
              Prorated refund for training programs not meeting advertised
              curriculum
            </li>
            <li>
              Transfer to alternative training dates at no additional cost
            </li>
            <li>
              Partial refunds for individual participants unable to complete
              programs
            </li>
            <li>
              Corporate training refunds based on delivered content and services
            </li>
          </ul>
        </li>

        <li>
          <span className="font-medium">
            4. Non-Refundable Services & Items
          </span>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>
              Completed plumbing work that meets professional standards and
              client approval
            </li>
            <li>Consultation fees and diagnostic services already performed</li>
            <li>
              Training programs successfully completed with certification issued
            </li>
            <li>Used or damaged equipment beyond normal handling</li>
            <li>
              Third-party materials and permits obtained for client projects
            </li>
          </ul>
        </li>

        {/* <li>
          <span className="font-medium">5. Refund Request Process</span>
          <p className="mt-1">To request a refund:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Email: refunds@cciplumbing.com.ng</li>
            <li>Phone: +234-801-234-5009</li>
            <li>Provide original service agreement or purchase receipt</li>
            <li>
              Include detailed explanation with supporting photos for defects
            </li>
            <li>Allow access for inspection of plumbing work if necessary</li>
          </ul>
        </li> */}

        <li>
          <span className="font-medium">6. Refund Assessment & Processing</span>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>
              Service refund requests reviewed by senior technician within 2
              days
            </li>
            <li>Equipment returns inspected within 24 hours of receipt</li>
            <li>
              Training refunds assessed based on attendance and completion
              records
            </li>
            <li>Approved refunds processed within 7-10 business days</li>
            <li>Complex cases may require additional assessment time</li>
          </ul>
        </li>

        <li>
          <span className="font-medium">7. Alternative Resolutions</span>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>
              Corrective work performed at no charge for service quality issues
            </li>
            <li>Equipment exchange for equivalent or upgraded models</li>
            <li>Training program transfers to alternative dates or formats</li>
            <li>
              Service credits applied to future plumbing work or equipment
              purchases
            </li>
            <li>Extended warranty coverage for equipment or service issues</li>
          </ul>
        </li>

        <li>
          <span className="font-medium">8. Emergency & Insurance Claims</span>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>
              Emergency service guarantees with automatic refunds for missed
              commitments
            </li>
            <li>Insurance claim assistance for covered plumbing damage</li>
            <li>
              Third-party inspection services available for dispute resolution
            </li>
            <li>Professional liability insurance covers workmanship errors</li>
          </ul>
        </li>
      </ul>

      {/* <div className="mt-6 pt-4 border-t border-gray-200">
        <h4 className="font-semibold text-xs md:text-sm xl:text-base mb-2">
          Contact Information
        </h4>
        <p className="text-xs md:text-sm xl:text-base">
          For refunds and service resolution:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm xl:text-base">
          <li>CCI Advanced Plumbing Tech and Technical Company Ltd</li>
          <li>Email: refunds@cciplumbing.com.ng</li>
          <li>Service Manager: service@cciplumbing.com.ng</li>
          <li>Phone: +234-801-234-5009</li>
          <li>Website: www.cciplumbing.com.ng</li>
        </ul>
      </div> */}
    </div>
  );
};

export default RefundPolicy;
