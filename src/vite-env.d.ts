/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID: string
  readonly VITE_BC_NAME: string
  readonly VITE_BC_POSITION: string
  readonly VITE_BC_VAT: string
  readonly VITE_BC_PHONE: string
  readonly VITE_BC_EMAIL: string
  readonly VITE_BC_FACEBOOK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
