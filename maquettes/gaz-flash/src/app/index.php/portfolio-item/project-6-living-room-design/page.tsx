import { RangePage } from "@/components/RangePage";
import { PATHS, ranges } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

const range = ranges.find((r) => r.path === PATHS.condensing)!;

export const metadata = pageMeta({ title: range.metaTitle, description: range.metaDescription, path: range.path });

export default function Page() {
  return <RangePage range={range} />;
}
