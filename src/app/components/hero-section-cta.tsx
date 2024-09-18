import Link from "next/link";

export function TopPlans() {
  const plans = [
    {
      name: "Unlimited",
      features: ["Premium data", "Endless talk & text"],
      price: "19.50",
      link: "/",
    },
    {
      name: "Turbo",
      features: ["50 GB data", "Endless talk & text"],
      price: "16",
      link: "/",
    },
    {
      name: "Lite",
      features: ["10 GB data", "Endless talk & text"],
      price: "9",
      link: "/",
    },
  ];

  return (
    <div className="py-4 text-black">
      <div className="flex items-stretch gap-4 flex-nowrap">
        {plans.map((plan, index) => (
          <Link
            key={index}
            href={plan.link}
            className="bg-[#FFF5E6] hover:shadow-xl transition-all hover:border-text-primary basis-1/3 border border-gray-300 text-gray-700 flex flex-col items-center p-3 rounded-lg shadow-sm"
          >
            <p className="text-3xl font-semibold text-text-primary">
              {plan.name}
            </p>
            {plan.features.map((feature, featureIndex) => (
              <p key={featureIndex} className="font-medium">
                {feature}
              </p>
            ))}
            <p className="p-2 mt-1 flex flex-col bg-[#1A6B9F] min-w-[80%] shadow-sm text-white rounded-lg items-center">
              <span className="block text-3xl font-semibold">
                <span className="text-[34px]">$</span>
                {plan.price}
              </span>
              <span className="block text-sm">per month</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
