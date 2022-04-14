import React, { useEffect, useState } from "react";
import { getPublicContent as contentSpaceCraftx } from "../api/game/spacecraftx";
import { getPublicContent as contentSeaFarmer } from "../api/game/seafarmer";
import { getPublicContent as contentRoboEmpire } from "../api/game/roboempire";
import { getPublicContent as contentGalaxyMiner } from "../api/game/galaxyminerx";
import { getPublicContent as contentAgeOfFarming } from "../api/game/ageoffarming";
import { getPublicContent as contentDiggerWorld } from "../api/game/diggersworld";

import { AssetInfo } from "../api/game/modal";
import {
  spxCode,
  seaCode,
  roboCode,
  galaxyCode,
  aofCode,
  diggerCode,
} from "../api/game";

interface ContentProps {
  code: string;
}

function useContent({ code }: ContentProps) {
  const [data, setData] = useState<AssetInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchingData = async () => {
    setLoading(true);
    let response: AssetInfo[] = [];
    if (code === spxCode) response = await contentSpaceCraftx();
    if (code === seaCode) response = await contentSeaFarmer();
    if (code === roboCode) response = await contentRoboEmpire();
    if (code === galaxyCode) response = await contentGalaxyMiner();
    if (code === aofCode) response = await contentAgeOfFarming();
    if (code === diggerCode) response = await contentDiggerWorld();

    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchingData();
  }, [code]);

  return {
    data,
    loading,
  };
}

export default useContent;
