import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { Me01Component } from './helpdesk/me01/me01.component';
import { FormsModule } from '@angular/forms';
import { Me02Component } from './helpdesk/me02/me02.component';
import { DistributivoCalendario2Component } from './distributivo/distributivo-calendario2/distributivo-calendario2.component';



import { ManagementTeamProgressComponent } from './falcon/dasboard/management-team-progress/management-team-progress.component';
import { ECommerceGoodAfternonComponent } from './falcon/dasboard/e-commerce-good-afternon/e-commerce-good-afternon.component';
import { DistributivoCalendarioComponent } from './distributivo/distributivo-calendario/distributivo-calendario.component';
import { DistributivoCursosComponent } from './Distributivo-Cursos/distributivo-cursos/distributivo-cursos.component';
import { ChatActivoComponent } from './chatActivo/chat-activo/chat-activo.component';
import { MensajeEntranteComponent } from './helpdesk/mensaje-entrante/mensaje-entrante.component';
import { FalconUsingStorageComponent } from './falcon/dashboard/falcon-using-storage/falcon-using-storage.component';
import { FalconDasboardCrmForecastComponent } from './falcon/dashboard/falcon-dasboard-crm-forecast/falcon-dasboard-crm-forecast.component';
import { FalconDashboardCampaignsComponent } from './falcon/dashboard/falcon-dashboard-campaigns/falcon-dashboard-campaigns.component';
import { DistributivoLoginComponent } from './distributivo/distributivo-login/distributivo-login.component';
import { SidebarChatComponent } from './sidebar/sidebar-chat/sidebar-chat.component';
import { SidebarConfigComponent } from './helpdesk/sidebar-config/sidebar-config.component';
import { FalconDashboardRecentComponent } from './falcon/dashboard/falcon-dashboard-recent/falcon-dashboard-recent.component';
import { FalconDashboardSessionByBrowserComponent } from './falcon/dashboart/falcon-dashboard-session-by-browser/falcon-dashboard-session-by-browser.component';

import { FalconDashboardMarketShareComponent } from './falcon/dashboard/falcon-dashboard-market-share/falcon-dashboard-market-share.component';
import { FalconDashboardRunningComponent } from './falcon/dasboard/falcon-dashboard-running/falcon-dashboard-running.component';
import { IntelligenceComponent } from './falcon/dasboard/intelligence/intelligence.component';
import { ProductsComponent } from './falcon/dasboard/products/products.component';
import { StorageComponent } from './falcon/dasboard/storage/storage.component';
import { StatisticsComponent } from './falcon/dasboard/statistics/statistics.component';
import { OrdersComponent } from './falcon/dasboard/orders/orders.component';
import { FalconDashboardBandwidthComponent } from './falcon/dasboard/bandwidth-saved/falcon-dashboard-bandwidth/falcon-dashboard-bandwidth.component';
import { HelpdeskHomeHistoricoComponent } from './helpdesk/home-historico/helpdesk-home-historico/helpdesk-home-historico.component';
import { VolumenChatFiltroFechaComponent } from './volumen-chat-filtro-fecha/volumen-chat-filtro-fecha.component';
import { UsersOnlineComponent } from './falcon/users-online/users-online.component';
import { RevenueComponent } from './falcon/dasboard/falcon-CRM/revenue/revenue.component';
import { TotalOrderComponent } from './falcon/dasboard/default/total-order/total-order.component';
import { SidebarChartComponent } from './helpdesk/sidebar-chart/sidebar-chart.component';
import { HelpdeskWidgetComponent } from './helpdesk-widget/helpdesk-widget.component';
import { FalconDashboardToDoListComponent } from './falcon/dasboard/to-do-list/falcon-dashboard-to-do-list/falcon-dashboard-to-do-list.component';
import { HelpdeskChatVolumeComponent } from './helpdesk/report/helpdesk-chat-volume/helpdesk-chat-volume.component';

import { AverageCallDurationComponent } from './falcon/falcon-CRM/call-duratiom/average-call-duration/average-call-duration.component';
import { SharedFilesComponent } from './falcon/default/shared-files/shared-files.component';
import { TopPagesTodayComponent } from './falcon/dasboard/top-pages-today/top-pages-today.component';
import { ActiveUsersComponent } from './falcon/dasboard/active-users/active-users.component';
import { FalconECommerceBestProductsComponent } from './falcon/dasboard/e-commerce/falcon-e-commerce-best-products/falcon-e-commerce-best-products.component';
import { FalconDashboardManagementFalcondiscussionComponent } from './falcon/dashboard/falcon-dashboard-management-falcondiscussion/falcon-dashboard-management-falcondiscussion.component';
import { NgChartsModule } from 'ng2-charts';
import { FalconDashboardCRMNewContactComponent } from './falcon/dashboard/falcon-dashboard-crm-new-contact/falcon-dashboard-crm-new-contact.component';
import { MembersActivityComponent } from './falcon/management/members/members-activity/members-activity.component';
import { ReturningCustomerRateComponent } from './falcon/e-commerce/customer/returning-customer-rate/returning-customer-rate.component';
import { FalconManagementNewScheduleComponent } from './falcon/dasboard/management/falcon-management-new-schedule/falcon-management-new-schedule.component';
import { LeadConversionComponent } from './falcon/dasboard/lead-conversion/lead-conversion.component';
import { RunningProjectsComponent } from './falcon/dasboard/running-projects/running-projects.component';
import { FalconDashboardMostLeadsComponent } from './falcon/dashboard/falcon-dashboard-most-leads/falcon-dashboard-most-leads.component';
import { CrmWelcomeToComponent } from './falcon/dasboard/crm-welcome-to/crm-welcome-to.component';


import { FalconClosevsgoalComponent } from './falcon/falcon-closevsgoal/falcon-closevsgoal.component';
import { FalconUsersComponent } from './falcon/falcon-users/falcon-users.component';
import { FalconTotalsalesComponent } from './falcon/falcon-totalsales/falcon-totalsales.component';
import { FalconAnalyticsCompletedComponent } from './falcon/falcon-analytics-completed/falcon-analytics-completed.component';
import { FalconRunningComponent } from './falcon/falcon-running/falcon-running.component';
import { MemberInfoComponent } from './falcon/member-info/member-info.component';
import { ECommerceRecentPurchasesComponent } from './falcon/e-commerce-recent-purchases/e-commerce-recent-purchases.component';
import { HelpdeskChatsComponent } from './helpdesk/helpdesk-chats/helpdesk-chats.component';
import { MensajeriaFiltroComponent } from './helpdesk/mensaje/mensajeria-filtro/mensajeria-filtro.component';
import { FalconDashboardTrafficSourceComponent } from './falcon/dashboard/falcon-dashboard-traffic-source/falcon-dashboard-traffic-source.component';
import { FalconDashboardManagementTODOLISTComponent } from './falcon/dashboard/falcon-dashboard-management-to-do-list/falcon-dashboard-management-to-do-list.component';
import { FalconDashboardManagementWELCOMETOFALCONComponent } from './falcon/dashboard/falcon-dashboard-management-welcome-tofalcon/falcon-dashboard-management-welcome-tofalcon.component';
import { FalconDashboardDefaultTOPPRODUCTSComponent } from './falcon/dashboard/falcon-dashboard-default-top-products/falcon-dashboard-default-top-products.component';
import { ECommerceSalesByPosLocationComponent } from './falcon/dasboard/e-commerce-sales-by-pos-location/e-commerce-sales-by-pos-location.component';
import { FalconAppEventCreateEventComponent } from './falcon/event/falcon-app-event-create-event/falcon-app-event-create-event.component';
import { CalendarComponent } from './falcon/calendar/calendar.component';
import { FalconECommerceProductGirdProductDetailsComponent } from './falcon/dashboard/falcon-e-commerce-product-gird-product-details/falcon-e-commerce-product-gird-product-details.component';
import { FalconECommerceWeklySalesComponent } from './falcon/dashboard/falcon-e-commerce-wekly-sales/falcon-e-commerce-wekly-sales.component';
import { FalconDashboardDefaultWeklySalesComponent } from './falcon/dashboard/falcon-dashboard-default-wekly-sales/falcon-dashboard-default-wekly-sales.component';
import { ShoppingCartComponent } from './falcon/e-commerce/shopping-cart/shopping-cart.component';
import { FalconDashboardSaasBANDWIDTHSAVEDComponent } from './falcon/dashboard/saas/falcon-dashboard-saas-bandwidth-saved/falcon-dashboard-saas-bandwidth-saved.component';
import { RecentActivityComponent } from './falcon/management/recent-activity/recent-activity.component';
import { TopProductsComponent } from './falcon/e-commerce/top-products/top-products.component';
import { FalconAPPEemailInboxComponent } from './falcon/eemail/falcon-app-eemail-inbox/falcon-app-eemail-inbox.component';
import { SaasActiveUsersComponent } from './falcon/dasboard/saas-active-users/saas-active-users.component';
import { CustomersComponent } from './falcon/management/customers/customers.component';
import { SaasRevenueComponent } from './falcon/dasboard/saas-revenue/saas-revenue.component';
import { SaasConversionComponent } from './falcon/dasboard/saas-conversion/saas-conversion.component';
import { FalconAPPEemailEemailDetailComponent } from './falcon/eemail/falcon-app-eemail-eemail-detail/falcon-app-eemail-eemail-detail.component';


@NgModule({
  declarations: [
    Me01Component,
    Me02Component,
    ChatActivoComponent,
    SidebarChatComponent,
    SidebarConfigComponent,
    FalconDashboardRecentComponent,
    MensajeEntranteComponent,
    FalconUsingStorageComponent,
    FalconDasboardCrmForecastComponent,
    FalconDashboardCampaignsComponent,
    DistributivoCalendario2Component,


    SidebarChartComponent,

    ManagementTeamProgressComponent,
    ECommerceGoodAfternonComponent,

    DistributivoCalendarioComponent,
    DistributivoCursosComponent,
    ChatActivoComponent,
    DistributivoLoginComponent,
    SidebarChatComponent,
    FalconDashboardSessionByBrowserComponent,
    FalconDashboardRunningComponent,
    IntelligenceComponent,
    ProductsComponent,
    StorageComponent,
    StatisticsComponent,
    OrdersComponent,

    SidebarChatComponent,

    SidebarChatComponent,
    FalconDashboardMarketShareComponent,
    FalconDashboardRunningComponent,
    FalconDashboardBandwidthComponent,
    HelpdeskHomeHistoricoComponent,
    VolumenChatFiltroFechaComponent,
    HelpdeskChatVolumeComponent,
    HelpdeskWidgetComponent,
    UsersOnlineComponent,
    RevenueComponent,
    TotalOrderComponent,
    FalconDashboardToDoListComponent,
    DistributivoCalendario2Component,
    AverageCallDurationComponent,
    SharedFilesComponent,
    TopPagesTodayComponent,
    ActiveUsersComponent,
    FalconECommerceBestProductsComponent,
    FalconDashboardManagementFalcondiscussionComponent,
    FalconDashboardCRMNewContactComponent,
    MembersActivityComponent,
    ReturningCustomerRateComponent,
    FalconManagementNewScheduleComponent,
    FalconClosevsgoalComponent,
    FalconUsersComponent,
    FalconTotalsalesComponent,
    FalconAnalyticsCompletedComponent,
    FalconRunningComponent,
    MemberInfoComponent,
    ECommerceRecentPurchasesComponent,
    HelpdeskChatsComponent,


    LeadConversionComponent,
    RunningProjectsComponent,
    FalconDashboardMostLeadsComponent,
    MensajeriaFiltroComponent,
    FalconDashboardTrafficSourceComponent,
    FalconDashboardManagementTODOLISTComponent,
    FalconDashboardManagementWELCOMETOFALCONComponent,
    FalconDashboardDefaultTOPPRODUCTSComponent,
    ECommerceSalesByPosLocationComponent,
    FalconAppEventCreateEventComponent,
    CalendarComponent,
    FalconECommerceProductGirdProductDetailsComponent,
    FalconECommerceWeklySalesComponent,
    FalconDashboardDefaultWeklySalesComponent,
    ShoppingCartComponent,
    FalconDashboardSaasBANDWIDTHSAVEDComponent,
    RecentActivityComponent,
    TopProductsComponent,
    FalconAPPEemailInboxComponent,
    SaasActiveUsersComponent,
    SaasRevenueComponent,
    FalconAPPEemailEemailDetailComponent,

  ],
  imports: [
    FeatureRoutingModule,
    FormsModule,
    NgChartsModule,
    NgChartsModule
  ]
})
export class FeatureModule { }
