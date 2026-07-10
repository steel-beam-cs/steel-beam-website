"use client";

import { useMemo, useState } from "react";

function currency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);
}

function percent(value: number) {
  return `${Number.isFinite(value) ? value.toFixed(1) : "0.0"}%`;
}

export function MarkupMarginCalculator() {
  const [cost, setCost] = useState("10000");
  const [markup, setMarkup] = useState("35");

  const result = useMemo(() => {
    const projectCost = Number(cost);
    const markupRate = Number(markup) / 100;
    const sellingPrice = projectCost * (1 + markupRate);
    const grossProfit = sellingPrice - projectCost;
    const marginRate = sellingPrice > 0 ? grossProfit / sellingPrice : 0;

    return {
      projectCost,
      markupRate,
      sellingPrice,
      grossProfit,
      marginRate,
    };
  }, [cost, markup]);

  return (
    <div className="calculator-panel">
      <div className="calculator-inputs">
        <label>
          Estimated job cost
          <input
            type="number"
            min="0"
            step="100"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </label>
        <label>
          Markup percentage
          <input
            type="number"
            min="0"
            step="1"
            value={markup}
            onChange={(event) => setMarkup(event.target.value)}
          />
        </label>
      </div>

      <div className="calculator-results" aria-live="polite">
        <article>
          <span>Selling price</span>
          <strong>{currency(result.sellingPrice)}</strong>
        </article>
        <article>
          <span>Gross profit</span>
          <strong>{currency(result.grossProfit)}</strong>
        </article>
        <article>
          <span>Profit margin</span>
          <strong>{percent(result.marginRate * 100)}</strong>
        </article>
      </div>

      <p className="calculator-note">
        Markup is added to cost. Margin is the percentage of the selling price
        that remains after direct job costs. They are related, but they are not
        the same number.
      </p>
    </div>
  );
}
