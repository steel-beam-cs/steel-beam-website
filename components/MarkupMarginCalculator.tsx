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

type MarkupMarginCalculatorProps = {
  locale?: "en" | "es";
};

const labels = {
  en: {
    cost: "Estimated job cost",
    markup: "Markup percentage",
    sellingPrice: "Selling price",
    grossProfit: "Gross profit",
    profitMargin: "Profit margin",
    note:
      "Markup is added to cost. Margin is the percentage of the selling price that remains after direct job costs. They are related, but they are not the same number.",
  },
  es: {
    cost: "Costo estimado del proyecto",
    markup: "Porcentaje de markup",
    sellingPrice: "Precio de venta",
    grossProfit: "Ganancia bruta",
    profitMargin: "Margen de ganancia",
    note:
      "El markup se agrega al costo. El margen es el porcentaje del precio de venta que queda despues de costos directos del proyecto. Estan relacionados, pero no son el mismo numero.",
  },
};

export function MarkupMarginCalculator({
  locale = "en",
}: MarkupMarginCalculatorProps) {
  const [cost, setCost] = useState("10000");
  const [markup, setMarkup] = useState("35");
  const copy = labels[locale];

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
          {copy.cost}
          <input
            type="number"
            min="0"
            step="100"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </label>
        <label>
          {copy.markup}
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
          <span>{copy.sellingPrice}</span>
          <strong>{currency(result.sellingPrice)}</strong>
        </article>
        <article>
          <span>{copy.grossProfit}</span>
          <strong>{currency(result.grossProfit)}</strong>
        </article>
        <article>
          <span>{copy.profitMargin}</span>
          <strong>{percent(result.marginRate * 100)}</strong>
        </article>
      </div>

      <p className="calculator-note">{copy.note}</p>
    </div>
  );
}
