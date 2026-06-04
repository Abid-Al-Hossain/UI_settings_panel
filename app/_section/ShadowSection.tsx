"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Slider from "@/components/shared/input/Slider";
import type { SettingsPanelState } from "../types";

type Props = { state: SettingsPanelState; update: <K extends keyof SettingsPanelState>(key: K, value: SettingsPanelState[K]) => void };

export default function ShadowSection({ state, update }: Props) {
  return <SectionCard title="Shadow" subtitle="Shadow controls for native settings generation."><Slider label="Shadow" value={state.shadow} min={0} max={80} step={1} onChange={(value) => update("shadow", value)} /></SectionCard>;
}
