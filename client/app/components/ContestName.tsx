import Link from "next/link";
import Country from "./Country.tsx";
import { IContest } from "@cc/shared";

const ContestName = ({ contest }: { contest: IContest }) => {
  return (
    <span className="d-flex align-items-center gap-2">
      <Country countryIso2={contest.countryIso2} noText />

      <Link href={`/competitions/${contest.competitionId}`} prefetch={false}>
        {contest.shortName}
      </Link>
    </span>
  );
};

export default ContestName;
